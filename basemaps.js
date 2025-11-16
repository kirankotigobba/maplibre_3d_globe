// basemaps.js

const MAPTILER_KEY = "2933bidRb4ILJ73B9Ebz";

const baseStyles = {


  datavizDark: {
    label: "🖤 Dataviz Dark (Custom)",
    style: `https://api.maptiler.com/maps/019a67df-cf98-7415-b721-99bcbb07c783/style.json?key=${MAPTILER_KEY}`
  },

  maptilerStreets: {
    label: "🗺️ MapTiler Streets",
    style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`,
  },
//   maptilerOutdoor: {
//     label: "🏞️ MapTiler Outdoor",
//     style: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${MAPTILER_KEY}`,
//   },
  maptilerSatellite: {
    label: "🛰️ MapTiler Satellite Hybrid",
    style: `https://api.maptiler.com/maps/hybrid/style.json?key=${MAPTILER_KEY}`,
  },
  maplibreWorld: {
    label: "🌐 MapLibre World",
    style: "https://demotiles.maplibre.org/style.json",
  },   


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
  },

};
