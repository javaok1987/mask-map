import React from 'react';

// Import CSS from Leaflet and plugins.
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

// Import JS from Leaflet and plugins.
import 'leaflet.markercluster';

import './styles/map.scss';

const L = window.L;

const getColor = d => {
  return d > 200 ? '#7cafc2' : d > 150 ? '#86c1b9' : d > 100 ? '#a1b56c' : d > 50 ? '#f7ca88' : d > 0 ? '#dc9656' : 'rgba(236,222,239,.9)';
};

const getStyle = maskCount => {
  return {
    radius: 8,
    weight: 1,
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(maskCount)
  };
};

const getLegendControl = () => {
  //Custom Legend Control.
  const legend = L.control({ position: 'bottomright' });
  legend.onAdd = () => {
    const div = L.DomUtil.create('div', 'legend-panel');
    const grades = [0, 50, 100, 150, 200];
    const labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (let i = 0; i < grades.length; i++) {
      labels.push(
        `
        <div class="legend-item">
          <i style="background:${getColor(grades[i] + 1)}"></i>
          ${grades[i]}${grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+'}
        </div>
      `
      );
    }
    div.innerHTML = labels.join('');
    return div;
  };
  return legend;
};

const onEachFeature = (feature, layer) => {
    const popupContent = `
      <div class="info-window">
        <h3>${layer.feature.properties.name}</h3>
        <p>成人口罩：${feature.properties.mask_adult} 個</p>
        <p>兒童口罩：${feature.properties.mask_child} 個</p>
      </div>
    `;
    layer.bindPopup(popupContent);
  };

export default class Map extends React.Component {
  componentDidMount() {
    this.markerPool = L.markerClusterGroup({
      zoomToBoundsOnClick: true,
      removeOutsideVisibleBounds: true
    });

    // Create map.
    this.maskMap = L.map('map-canvas', {
      center: [this.props.latitude, this.props.longitude],
      zoom: 16,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    // Geolocation.
    this.maskMap.locate({ setView: true, maxZoom: 16 });
    this.maskMap.on('locationfound', e => {
      // Add marker.
      this.marker = L.marker(e.latlng)
        .addTo(this.maskMap)
        .bindPopup('You are here!')
        .openPopup();
    });
  }

  componentDidUpdate() {

    const legend = getLegendControl();
    legend.addTo(this.maskMap);

    const pointToLayer = (feature, latlng) => {
      const maskCount = feature.properties.mask_adult + feature.properties.mask_child;
      const marker = L.circleMarker(latlng, getStyle(maskCount));

      this.markerPool.addLayer(marker);
      return marker;
    };

    L.geoJSON(this.props.markersData, {
      style: function(feature) {
        return { color: feature.properties.color };
      },
      onEachFeature,
      pointToLayer
    }); //.addTo(this.maskMap);

    this.maskMap.addLayer(this.markerPool);
  }

  render() {
    return <div id="map-canvas"></div>;
  }
}
