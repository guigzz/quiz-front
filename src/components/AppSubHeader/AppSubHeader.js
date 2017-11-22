import React, { Component } from 'react';
import './AppSubHeader.css';

class AppSubHeader extends Component {
  render() {
    return (
      <div className="app-subheader level is-mobile">
        {this.props.children}
      </div>
    );
  }
}

export default AppSubHeader;
