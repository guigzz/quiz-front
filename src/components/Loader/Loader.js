import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="loading level is-mobile">
        <div className="level-item">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
            <div className="loader-text"><p>{this.props.text}</p></div>
        </div>
      </div>
    )
  }
}

export default Loader