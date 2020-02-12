import React from 'react';
import { Card, Progress, Message, Icon } from 'semantic-ui-react';

export default class DrugdrugstoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            return drugstore.properties.address.substring(0, currentLocation.length) === currentLocation ? (
              <Card key={drugstore.properties.id}>
                <Card.Content>
                  <Card.Header onClick={() => this.handleClick(drugstore.geometry)}>{drugstore.properties.name}</Card.Header>
                  <Card.Meta>{drugstore.properties.phone}</Card.Meta>
                  <Card.Description>
                    <a href={`https://www.google.com.tw/maps/place/${drugstore.properties.address}`} target="_blank" rel="noopener noreferrer">
                      {drugstore.properties.address}
                    </a>
                    <br />
                    {drugstore.properties.service_note === '' || drugstore.properties.service_note === '無特定' ? null : (
                      <Message size="tiny">
                        <Icon name="bullhorn" />
                        {drugstore.properties.service_note}
                      </Message>
                    )}
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
