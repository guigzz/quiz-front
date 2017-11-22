import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <Link to="/"><h1 className="app-header-title">The Awesome Quiz</h1></Link>
      </header>
    );
  }
}

export default AppHeader;
