import React from 'react';

// Import CSS from Leaflet and plugins.
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet-toolbar/dist/leaflet.toolbar.css';

// Import JS from Leaflet and plugins.
import 'leaflet.markercluster';
import 'leaflet-toolbar';

import '../styles/map.scss';

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

    for (let i = 0; i < grades.length; i++) {
      labels.push(`
        <div class="legend-item">
          <i style="background:${getColor(grades[i] + 1)}"></i>
          ${grades[i]}${grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+'}
        </div>
      `);
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
  constructor(props) {
    super(props);
    this.state = {
      myPlace: null,
    };
  }

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
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          accessToken: 'pk.eyJ1IjoiaWFubGlhbzE5ODciLCJhIjoiY2s2OHFmMzQ0MDV5MjN1bjlmMzF2a3htZyJ9.n70D4lI2aqZ1dj-EGCuqJw'
        })
      ]
    });

    // Geolocation.
    this.maskMap.locate({ setView: true, maxZoom: 16 });
    this.maskMap.on('locationfound', e => {
      this.setState({ myPlace: e.latlng });
      // Add marker.
      this.marker = L.marker(e.latlng)
        .addTo(this.maskMap)
        .bindPopup('You are here!')
        .openPopup();
    });

    const legend = getLegendControl();
    legend.addTo(this.maskMap);

    // ToolBar.
    const customAction = L.Toolbar2.Action.extend({
      options: {
        toolbarIcon: {
          html: '<div><i aria-hidden="true" class="teal street view large icon"></i></div>',
          tooltip: 'Go to the Eiffel Tower'
        }
      },
      addHooks: () => {
        this.marker
          .setLatLng(this.state.myPlace)
          .bindPopup('You are here!')
          .openPopup();
        this.maskMap.flyTo(this.state.myPlace, 18);
      }
    });
    new L.Toolbar2.Control({
      actions: [customAction]
    }).addTo(this.maskMap);
  }

  componentDidUpdate() {
    this.markerPool.clearLayers();

    if (this.props.focus) {
      const _focus = new L.LatLng(this.props.focus[1], this.props.focus[0]);
      this.marker
        .setLatLng(_focus)
        .bindPopup(
          `
          <a href="https://www.google.com.tw/maps/dir/${this.state.myPlace.lat},${this.state.myPlace.lng}/${this.props.focus[1]},${this.props.focus[0]}" target="_blank" rel="noopener noreferrer">
            導航到這
          </a>
        `
        )
        .openPopup();
      this.maskMap.flyTo(_focus, 18);
    }

    L.geoJSON(this.props.markersData, {
      style: function(feature) {
        return { color: feature.properties.color };
      },
      onEachFeature,
      pointToLayer: (feature, latlng) => {
        const maskCount = feature.properties.mask_adult + feature.properties.mask_child;
        const marker = L.circleMarker(latlng, getStyle(maskCount));

        this.markerPool.addLayer(marker);
        return marker;
      }
    });

    this.maskMap.addLayer(this.markerPool);
  }

  render() {
    return <div id="map-canvas"></div>;
  }
}
