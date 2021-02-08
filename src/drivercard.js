import React, { Component } from 'react';
import Rating from './rating';

class DriverCard extends Component {
  render() {
    return (
      <div className="DriverCard">
        <img className="pic" src={this.props.img} alt="" />
        <div className="info">
          <h2>{this.props.name}</h2>
          <Rating>{this.props.rating}</Rating>
          <p>
            {this.props.car.model} - {this.props.car.droid}
          </p>
        </div>
      </div>
    );
  }
}

export default DriverCard;
