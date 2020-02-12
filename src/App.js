import React from 'react';

import MaskMap from './components/map';
import DrugstoreCard from './components/drugstore-card';
import CitySelect from './components/city-select';

import { Button, Dimmer, Icon, Loader, Image, Segment } from 'semantic-ui-react';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 25.030313,
        longitude: 121.54924,
        zoom: 16
      },
      visible: false,
      city: '台北市',
      district: '大安區'
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

  toggleSidebar(visible) {
    this.setState({ visible: !visible });
  }

  handleCity = city => {
    console.log('handleChange', city);
    this.setState({ city });
  }

  handleDistrict = district => {
    this.setState({ district });
  }

  render() {
    const { viewport, drugstore, city, district } = this.state;

    return (
      <div className="App">
        <MaskMap {...viewport} markersData={drugstore}></MaskMap>
        <div className={this.state.visible ? 'floating-panel is-visible' : 'floating-panel'}>
          {/* <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer> */}
          <CitySelect onSelectCity={this.handleCity} onSelectDistrict={this.handleDistrict}></CitySelect>
          <DrugstoreCard markersData={drugstore} city={city} district={district}></DrugstoreCard>
          <Button icon labelPosition="right" className="floating-panel__close" onClick={() => this.toggleSidebar(this.state.visible)}>
            關閉
            <Icon name={this.state.visible ? 'angle double right' : 'angle double left'} />
          </Button>
        </div>
      </div>
    );
  }
}
