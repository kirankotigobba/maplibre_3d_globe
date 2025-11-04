// Initialize the map
const map = new maplibregl.Map({
  container: 'map',
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
    layers: [
      {
        id: 'base-layer',
        type: 'raster',
        source: 'cartoLight',
      }
    ]
  },
  center: [0, 0],
  zoom: 2,
  projection: 'globe'
});

// Add the globe projection and atmosphere after style load
map.on('style.load', () => {
  map.setProjection({ type: 'globe' });

  // Add realistic atmosphere
  map.setFog({
    color: 'rgba(186, 210, 235, 0.5)',
    'high-color': 'rgba(36, 92, 223, 0.4)',
    'space-color': 'rgb(11, 11, 25)',
    'horizon-blend': 0.02
  });
});

// Add controls
map.addControl(new maplibregl.NavigationControl(), 'top-right');
map.addControl(new maplibregl.GlobeControl(), 'top-left');
