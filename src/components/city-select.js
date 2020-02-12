import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import CITY_AREA from '../data/city-area.json';

export default class SelectCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityOptions: CITY_AREA.map(item => ({
        key: item.id,
        text: item.name,
        value: item.name
      })),
      districtOptions: [
        { key: 1, text: '中正區', value: '中正區' },
        { key: 2, text: '大同區', value: '大同區' },
        { key: 3, text: '中山區', value: '中山區' },
        { key: 4, text: '松山區', value: '松山區' },
        { key: 5, text: '大安區', value: '大安區' },
        { key: 6, text: '萬華區', value: '萬華區' },
        { key: 7, text: '信義區', value: '信義區' },
        { key: 8, text: '士林區', value: '士林區' },
        { key: 9, text: '北投區', value: '北投區' },
        { key: 10, text: '內湖區', value: '內湖區' },
        { key: 11, text: '南港區', value: '南港區' },
        { key: 12, text: '文山區', value: '文山區' }
      ],
      city: '台北市',
      district: '大安區'
    };
  }

  handleCity = (e, { value }) => {
    this.props.onSelectCity(value);

    const currentCity = CITY_AREA.find(function(item, index, array) {
      return item.name === value;
    });
    this.setState({
      city: value,
      districtOptions: currentCity.districts.map(item => ({
        key: item.id,
        text: item.name,
        value: item.name
      }))
    });

    if (currentCity.districts && currentCity.districts.length > 1) {
      const _district = currentCity.districts[0].name;
      this.setState({
        district: _district
      });
      this.props.onSelectDistrict(_district);
    }
  };

  handleDistrict = (e, { value }) => {
    this.setState({
      district: value
    });
    this.props.onSelectDistrict(value);
  };

  render() {
    const { cityOptions, districtOptions, city, district } = this.state;

    return (
      <div>
        <Dropdown
          button
          className="icon teal"
          floating
          labeled
          scrolling
          icon="map marker alternate"
          options={cityOptions}
          onChange={this.handleCity}
          text={city}
        />
        <Dropdown
          button
          className="icon teal"
          floating
          labeled
          scrolling
          icon="map marker alternate"
          options={districtOptions}
          onChange={this.handleDistrict}
          text={district}
        />
      </div>
    );
  }
}
