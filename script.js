// Define basemaps
const baseStyles = {
  osm: {
    label: "🌍 OpenStreetMap",
    style: {
      version: 8,
      sources: {
        osmTiles: {
          type: 'raster',
          tiles: [
            'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
          ],
          tileSize: 256,
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        }
      },
      layers: [{ id: 'osm-layer', type: 'raster', source: 'osmTiles' }]
    }
  },

  carto: {
    label: "🗺️ Carto Light",
    style: {
      version: 8,
      sources: {
        cartoLight: {
          type: 'raster',
          tiles: [
            'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            'https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            'https://c.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            'https://d.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
          ],
          tileSize: 256,
          attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CARTO</a>'
        }
      },
      layers: [{ id: 'carto-layer', type: 'raster', source: 'cartoLight' }]
    }
  },

  // stamenToner: {
  //   label: "🖤 Stamen Toner",
  //   style: {
  //     version: 8,
  //     sources: {
  //       stamenToner: {
  //         type: 'raster',
  //         tiles: [
  //           'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png'
  //         ],
  //         tileSize: 256,
  //         attribution:
  //           '© <a href="https://stamen.com/">Stamen Design</a> © <a href="https://stadiamaps.com/">Stadia Maps</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //       }
  //     },
  //     layers: [{ id: 'stamen-toner-layer', type: 'raster', source: 'stamenToner' }]
  //   }
  // },

  // stamenTerrain: {
  //   label: "⛰️ Stamen Terrain",
  //   style: {
  //     version: 8,
  //     sources: {
  //       stamenTerrain: {
  //         type: 'raster',
  //         tiles: [
  //           'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.png'
  //         ],
  //         tileSize: 256,
  //         attribution:
  //           '© <a href="https://stamen.com/">Stamen Design</a> © <a href="https://stadiamaps.com/">Stadia Maps</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //       }
  //     },
  //     layers: [{ id: 'stamen-terrain-layer', type: 'raster', source: 'stamenTerrain' }]
  //   }
  // },
    darkMatterNoLabels: {
    label: "🌑 Dark Matter (No Labels)",
    style: {
      version: 8,
      sources: {
        darkMatterTiles: {
          type: 'raster',
          tiles: [
            'https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
            'https://b.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
            'https://c.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
            'https://d.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
          ],
          tileSize: 256,
          attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
            '© <a href="https://carto.com/">CARTO</a>'
        }
      },
      layers: [
        { id: 'dark-matter-nolabels-layer', type: 'raster', source: 'darkMatterTiles' }
      ]
    }
  }
,
  // watercolor: {
  //   label: "🎨 Stamen Watercolor",
  //   style: {
  //     version: 8,
  //     sources: {
  //       watercolorTiles: {
  //         type: 'raster',
  //         tiles: [
  //           'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=YOUR_KEY'
  //         ],
  //         tileSize: 256,
  //         attribution:
  //           '© <a href="https://stamen.com/">Stamen Design</a> ' +
  //           '© <a href="https://stadiamaps.com/">Stadia Maps</a> ' +
  //           '© <a href="https://openmaptiles.org/">OpenMapTiles</a> ' +
  //           '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //       }
  //     },
  //     layers: [
  //       { id: 'watercolor-layer', type: 'raster', source: 'watercolorTiles' }
  //     ]
  //   }
  // }
};


// Initialize map with OSM
const map = new maplibregl.Map({
  container: 'map',
  style: baseStyles.osm.style,
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

// Default controls
map.addControl(new maplibregl.NavigationControl(), 'top-right');
map.addControl(new maplibregl.GlobeControl(), 'top-left');

// =========================
// 🗺️ Basemap Switcher Control
// =========================
const switcher = document.createElement('div');
switcher.id = 'basemap-switcher';

// Icon button
const iconBtn = document.createElement('button');
iconBtn.id = 'basemap-icon';
iconBtn.innerHTML = '🗺️';
iconBtn.title = 'Change basemap';
iconBtn.style.background = '#fff';
iconBtn.style.border = 'none';
iconBtn.style.cursor = 'pointer';
iconBtn.style.fontSize = '22px';
iconBtn.style.borderRadius = '6px';
iconBtn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
iconBtn.style.padding = '4px 8px';

// Dropdown menu (hidden by default)
const menu = document.createElement('div');
menu.id = 'basemap-menu';
menu.style.display = 'none';
menu.style.position = 'absolute';
menu.style.top = '45px';
menu.style.right = '0';
menu.style.background = 'rgba(255,255,255,0.95)';
menu.style.borderRadius = '6px';
menu.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
menu.style.padding = '6px 10px';
menu.style.minWidth = '160px';

// Add basemap buttons inside menu
Object.keys(baseStyles).forEach(key => {
  const btn = document.createElement('button');
  btn.textContent = baseStyles[key].label;
  btn.style.display = 'block';
  btn.style.width = '100%';
  btn.style.margin = '4px 0';
  btn.style.background = '#fff';
  btn.style.border = 'none';
  btn.style.padding = '6px';
  btn.style.cursor = 'pointer';
  btn.style.textAlign = 'left';
  btn.style.borderRadius = '4px';
  btn.onmouseover = () => (btn.style.background = '#f0f0f0');
  btn.onmouseout = () => (btn.style.background = '#fff');

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
    // Hide menu after selection
    menu.style.display = 'none';
  });

  menu.appendChild(btn);
});

switcher.appendChild(iconBtn);
switcher.appendChild(menu);
document.body.appendChild(switcher);

// Toggle menu visibility on icon click
iconBtn.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});

// Hide menu if clicking outside
document.addEventListener('click', (e) => {
  if (!switcher.contains(e.target)) menu.style.display = 'none';
});
