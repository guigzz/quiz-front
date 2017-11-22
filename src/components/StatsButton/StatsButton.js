import React, { Component } from 'react';
import './StatsButton.css'

class StatsButton extends Component {
  render() {
    return (
      <button 
        title="See your statistics" 
        className="stats-btn button primary-btn" 
        onClick={this.props.onButtonClicked}>
        <span class="icon is-large">
          <i class="fa fa-bar-chart"></i>
        </span>
      </button>
    )
  }
}

export default StatsButton