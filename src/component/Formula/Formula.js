import './Formula.css';
import React from 'react';

export default class Formula extends React.Component {
  render() {
    return <div className="formulaScreen">{this.props.formula}</div>;
  }
}
