// basemaps.js
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
};
