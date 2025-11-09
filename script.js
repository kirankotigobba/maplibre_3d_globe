// Initialize map
const map = new maplibregl.Map({
  container: 'map',
  style: baseStyles.datavizDark.style, // ✅ Default basemap
  center: [77.5946, 12.9716],
  zoom: 2,
  projection: 'globe'
});

// Atmosphere
map.on('style.load', () => {
  map.setProjection({ type: 'globe' });
  map.setFog({
    color: 'rgba(186, 210, 235, 0.5)',
    'high-color': 'rgba(36, 92, 223, 0.4)',
    'space-color': 'rgb(11, 11, 25)',
    'horizon-blend': 0.02
  });
});

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
      map.jumpTo({ center, zoom });
      map.setFog({
        color: 'rgba(186, 210, 235, 0.5)',
        'high-color': 'rgba(36, 92, 223, 0.4)',
        'space-color': 'rgb(11, 11, 25)',
        'horizon-blend': 0.02
      });
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
