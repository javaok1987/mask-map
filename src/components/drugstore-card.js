import React from 'react';
import { Card, Progress, Icon } from 'semantic-ui-react';

export default class DrugstoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getPercent(mask, total) {
    let percent = mask / total;
    return percent > 1 ? 100 : percent * 100;
  }

  render() {
    const currentLocation = `${this.props.city}${this.props.district}`;

    return (
      <div className="floating-panel__list">
        {this.props.markersData &&
          this.props.markersData.features.map(store => {
            return store.properties.address.substring(0, currentLocation.length) === currentLocation ? (
              <Card key={store.properties.id} color="teal">
                <Card.Content>
                  <Card.Header>{store.properties.name}</Card.Header>
                  <Card.Meta>{store.properties.phone}</Card.Meta>
                  <Card.Description>
                    <a href={`https://www.google.com.tw/maps/place/${store.properties.address}`} target="_blank" rel="noopener noreferrer">
                      {store.properties.address}
                    </a>
                  </Card.Description>
                </Card.Content>

                <Card.Content extra>
                  <Progress percent={this.getPercent(store.properties.mask_adult, 200)} indicating>
                    成人:{store.properties.mask_adult}
                  </Progress>
                  <Progress percent={this.getPercent(store.properties.mask_child, 50)} indicating>
                    兒童:{store.properties.mask_child}
                  </Progress>
                </Card.Content>
              </Card>
            ) : null;
          })}
      </div>
    );
  }
}
