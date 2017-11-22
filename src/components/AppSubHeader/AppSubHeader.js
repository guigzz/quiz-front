import React, { Component } from 'react';
import './AppSubHeader.css';

class AppSubHeader extends Component {
  render() {
    return (
      <div className="level is-mobile app-subheader">
        {this.props.children}
      </div>
    );
  }
}

export default AppSubHeader;
