// Initialize map
const map = new maplibregl.Map({
  container: 'map',
  style: baseStyles.datavizDark.style, // ✅ Default basemap
  center: [77.5946, 12.9716],
  zoom: 2,
  projection: 'globe',
  transparent: true
});

// --- 2. GET BACKGROUND ELEMENT ---
const bgContainer = document.getElementById('background-container');
const baseZoom = map.getZoom(); // Get the initial zoom level (e.g., 2)

// --- 3. THE SYNC FUNCTION ---
// This function will run on load and every time the map zooms
function updateBackgroundScale() {
    const zoom = map.getZoom();
    
    // Calculate scale factor. 
    // map.getZoom() is logarithmic. 
    // Math.pow(2, ...) is the correct way to convert it to a linear scale.
    const scale = Math.pow(2, zoom - baseZoom); 
    
    // Apply the scale to our background container
    bgContainer.style.transform = `translate(-50%, -50%) scale(${scale})`;
}


// Atmosphere
map.on('style.load', () => {
  map.setProjection({ type: 'globe' });
  updateBackgroundScale();
});

map.on('zoom', updateBackgroundScale);

// Controls
map.addControl(new maplibregl.NavigationControl(), 'top-right');
map.addControl(new maplibregl.GlobeControl(), 'top-left');

// =========================
// 🗺️ Basemap Switcher
// =========================
const switcher = document.createElement('div');
switcher.id = 'basemap-switcher';

const iconBtn = document.createElement('button');
iconBtn.id = 'basemap-icon';
iconBtn.innerHTML = '🗺️';
iconBtn.title = 'Change basemap';

const menu = document.createElement('div');
menu.id = 'basemap-menu';

// Add basemap buttons
Object.keys(baseStyles).forEach(key => {
  const btn = document.createElement('button');
  btn.textContent = baseStyles[key].label;

  btn.addEventListener('click', () => {
    const center = map.getCenter();
    const zoom = map.getZoom();
    map.setStyle(baseStyles[key].style);
    map.once('style.load', () => {
      map.setProjection({ type: 'globe' });
      updateBackgroundScale(); // ✅ Also set scale on basemap change
      map.jumpTo({ center, zoom });
    });
    menu.style.display = 'none';
  });

  menu.appendChild(btn);
});

switcher.appendChild(iconBtn);
switcher.appendChild(menu);
document.body.appendChild(switcher);

iconBtn.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('click', e => {
  if (!switcher.contains(e.target)) menu.style.display = 'none';
});
