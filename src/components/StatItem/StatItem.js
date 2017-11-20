import React, { Component } from 'react';
import './StatItem.css';

class StatItem extends Component {
  render() {
    return (
      <div className="stat-item card">
        <div className="stat-item-header">
          <em>{this.props.date}</em>
        </div>
        <div className="stat-item-content">
          <strong>{this.props.score}</strong>
        </div>
      </div>
    );
  }
}

export default StatItem;

