import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

class Error extends Component {
  render() {
    return (
      <div className="one-error columns is-centered">
        <div className="column is-two-thirds-tablet is-half-desktop is-half-widescreen is-half-fullhd">
          <div>
            <div className="error-top">
              Oops...!
            </div>
            <div className="error-text"><p>{this.props.text}</p></div>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Error