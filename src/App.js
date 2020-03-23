import React from 'react';

import MaskMap from './components/map';
import DrugstoreCard from './components/drugstore-card';
import CitySelect from './components/city-select';

import { Button, Icon } from 'semantic-ui-react';

import 'normalize.css';
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
      drugstoreGJson: null,
      twCountyGJson: null,
      layer: null,
      focus: null,
      visible: true,
      showChild: false,
      city: '新北市',
      district: '土城區'
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
      .then(response => response.json())
      .then(geojson => {
        this.setState({ drugstoreGJson: geojson });
        if (('availWidth', window.screen.availWidth <= 768)) this.setState({ visible: false });
        document.body.classList.add('dom-ready');
      })
      .catch(err => {
        console.log('錯誤:', err);
      });

    fetch('https://raw.githubusercontent.com/javaok1987/mask-map/master/src/data/tw-county.geojson')
      .then(response => response.json())
      .then(geojson => {
        this.setState({ twCountyGJson: geojson });
        this.setState({
          layer: this.state.twCountyGJson['features'].filter(county => {
            return county.properties.name === this.state.city;
          })
        });
      })
      .catch(err => {
        console.log('錯誤:', err);
      });
  }

  toggleSidebar(visible) {
    this.setState({ visible: !visible });
  }

  handleCity = city => {
    this.setState({
      city,
      focus: null,
      layer: this.state.twCountyGJson['features'].filter(county => {
        return county.properties.name === city;
      })
    });
  };

  handleDistrict = district => {
    this.setState({ focus: null, district });
  };

  handleClickDrugstore = drugstore => {
    this.setState({
      focus: drugstore.coordinates
    });
  };

  render() {
    const { viewport, drugstoreGJson, city, district, focus, layer } = this.state;

    return (
      <div className="app">
        <MaskMap {...viewport} markersData={drugstoreGJson} layer={layer} focus={focus}></MaskMap>
        <div className={this.state.visible ? 'floating-panel is-visible' : 'floating-panel'}>
          <div className="floating-panel__header">
            <h3>口罩地圖 MASK MAP</h3>
            <CitySelect onSelectCity={this.handleCity} onSelectDistrict={this.handleDistrict}></CitySelect>
          </div>
          <DrugstoreCard markersData={drugstoreGJson} city={city} district={district} onClickDrugstore={this.handleClickDrugstore}></DrugstoreCard>
          <Button icon compact color="teal" labelPosition="right" className="floating-panel__close" onClick={() => this.toggleSidebar(this.state.visible)}>
            關閉
            <Icon name={this.state.visible ? 'angle double left' : 'angle double right'} />
          </Button>
        </div>
      </div>
    );
  }
}
