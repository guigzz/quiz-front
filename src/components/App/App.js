import React, { Component } from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader.js';
import AppContent from '../AppContent/AppContent.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <AppContent />
      </div>
    );
  }
}

export default App;
