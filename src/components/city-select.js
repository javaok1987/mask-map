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
        { key: 15, text: '板橋區', value: '板橋區' },
        { key: 28, text: '土城區', value: '土城區' },
        { key: 23, text: '新店區', value: '新店區' },
        { key: 26, text: '永和區', value: '永和區' },
        { key: 27, text: '中和區', value: '中和區' }
      ],
      city: '新北市',
      district: '土城區'
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
          icon="filter"
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
          icon="filter"
          options={districtOptions}
          onChange={this.handleDistrict}
          text={district}
        />
      </div>
    );
  }
}
