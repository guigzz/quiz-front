import React, { Component } from 'react';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <h1 className="app-header-title">The Awesome Quiz</h1>
        <div className="app-subheader">This is the sub-header</div>
      </header>
    );
  }
}

export default AppHeader;
