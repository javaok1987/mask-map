import React from 'react';
import { Card, Progress } from 'semantic-ui-react';

export default class DrugdrugstoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * 計算兩個坐標點之間的距離
   * @param {*} lat1
   * @param {*} lng1
   * @param {*} lat2
   * @param {*} lng2
   */
  getDistance(lat1, lng1, lat2, lng2) {
    const radLat1 = (lat1 * Math.PI) / 180.0;
    const radLat2 = (lat2 * Math.PI) / 180.0;
    const a = radLat1 - radLat2;
    const b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000;
    return s;
  }

  getPercent(mask, total) {
    let percent = mask / total;
    return percent > 1 ? 100 : percent * 100;
  }

  handleClick = drugstore => {
    this.props.onClickDrugstore(drugstore);
  };

  render() {
    const currentLocation = `${this.props.city}${this.props.district}`;

    return (
      <div className="floating-panel__list">
        {this.props.markersData &&
          this.props.markersData.features.map(drugstore => {
            return drugstore.properties.address.substring(0, currentLocation.length) === currentLocation ? ( // 縣市區域過濾.
              <Card key={drugstore.properties.id} className={drugstore.properties.mask_adult === 0 ? 'is-disable' : ''}>
                <Card.Content>
                  <Card.Header onClick={() => this.handleClick(drugstore.geometry)}>{drugstore.properties.name}</Card.Header>
                  <Card.Meta>{drugstore.properties.phone}</Card.Meta>
                  <Card.Description>
                    <a href={`https://www.google.com.tw/maps/place/${drugstore.properties.address}`} target="_blank" rel="noopener noreferrer">
                      {drugstore.properties.address}
                    </a>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Progress percent={this.getPercent(drugstore.properties.mask_adult, 200)} indicating>
                    成人:{drugstore.properties.mask_adult}
                  </Progress>
                  <Progress percent={this.getPercent(drugstore.properties.mask_child, 50)} indicating>
                    兒童:{drugstore.properties.mask_child}
                  </Progress>
                </Card.Content>
              </Card>
            ) : null;
          })}
      </div>
    );
  }
}
