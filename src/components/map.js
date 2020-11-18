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
const turf = window.turf;

const getColor = d => {
  return d > 480 ? '#7cafc2' : d > 360 ? '#86c1b9' : d > 240 ? '#a1b56c' : d > 120 ? '#f7ca88' : d > 0 ? '#dc9656' : 'rgba(236,222,239,.9)';
};

const getStyle = maskCount => {
  return {
    radius: 10,
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
    const grades = [0, 120, 240, 360, 480];
    const labels = [];

    for (let i = 0; i < grades.length; i++) {
      labels.push(`
        <div class="legend-item">
          <i style="background:${getColor(grades[i] + 1)}"></i>${grades[i]} ↑
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
      markerPool: null,
      maskMap: null,
      // mapLayer:null,
      countryLayer: null,
      countryName: ''
    };
  }

  componentDidMount() {
    this.markerPool = L.markerClusterGroup({
      zoomToBoundsOnClick: true,
      removeOutsideVisibleBounds: true
    });

    const center = [this.props.latitude, this.props.longitude];
    // Create map.
    this.maskMap = L.map('map-canvas', {
      center,
      zoom: 12,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    this.marker = L.marker(center).addTo(this.maskMap);

    // Geolocation.
    this.maskMap.locate({ setView: true, maxZoom: 11 });
    this.maskMap.on('locationfound', e => {
      this.setState({ myPlace: e.latlng });
      // Add marker.
      this.marker
        .setLatLng(this.state.myPlace)
        .bindPopup('You are here!')
        .openPopup();
    });

    const legend = getLegendControl();
    legend.addTo(this.maskMap);

    // ToolBar.
    const customAction = L.Toolbar2.Action.extend({
      options: {
        toolbarIcon: {
          html: '<div><i aria-hidden="true" class="crosshairs small icon"></i></div>',
          tooltip: 'Go to the Eiffel Tower'
        }
      },
      addHooks: () => {
        if (this.state.myPlace) {
          this.marker
            .setLatLng(this.state.myPlace)
            .bindPopup('You are here!')
            .openPopup();
          this.maskMap.flyTo(this.state.myPlace, 17);
        }
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
          this.state.myPlace
            ? `<a href="https://www.google.com.tw/maps/dir/${this.state.myPlace.lat},${this.state.myPlace.lng}/${this.props.focus[1]},${this.props.focus[0]}" target="_blank" rel="noopener noreferrer">前往藥局</a>`
            : `<a href=https://www.google.com.tw/maps/place/${this.props.focus[1]},${this.props.focus[0]} target="_blank" rel="noopener noreferrer">前往藥局</a>`
        )
        .openPopup();
      this.maskMap.flyTo(_focus, 17);
    }

    if (this.props.layer && this.props.layer.length === 1) {
      const country = this.props.layer[0];

      // 相同縣市不清除.
      if (country.properties.name !== this.countryName) {
        if (this.countryLayer) this.countryLayer.clearLayers();

        const center = turf.centerOfMass(country);
        const centerLatLng = new L.LatLng(center.geometry.coordinates[1], center.geometry.coordinates[0]);

        this.countryLayer = L.geoJson(null)
          .addData(this.props.layer)
          .addTo(this.maskMap);

        this.countryName = country.properties.name;

        this.marker
          .setLatLng(centerLatLng)
          .bindPopup(this.countryName)
          .openPopup();

        this.maskMap.flyTo(centerLatLng, 10);
      }

      if (!this.props.markersData) return false;

      const ptsWithin = turf.pointsWithinPolygon(this.props.markersData, this.props.layer[0]);
      if (ptsWithin) {
        L.geoJSON(ptsWithin, {
          style: function(feature) {
            return { color: feature.properties.color };
          },
          onEachFeature,
          pointToLayer: (feature, latlng) => {
            const maskCount = feature.properties.mask_adult;
            const marker = L.circleMarker(latlng, getStyle(maskCount));
            this.markerPool.addLayer(marker);
            return marker;
          }
        });
        this.maskMap.addLayer(this.markerPool);
      }
    }
  }

  render() {
    return <div id="map-canvas"></div>;
  }
}
