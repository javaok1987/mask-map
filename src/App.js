import React from 'react';

import Map from './Map';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 25.030313,
        longitude: 121.54924,
        zoom: 16
      }
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
      .then(response => response.json())
      .then(geojson => {
        this.setState({ drugstore: geojson });
      })
      .catch(err => {
        console.log('錯誤:', err);
      });
  }

  render() {
    const { viewport, drugstore } = this.state;

    return (
      <div className="App">
        <Map {...viewport} markersData={drugstore}></Map>
      </div>
    );
  }
}
