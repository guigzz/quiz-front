import React, { Component } from 'react';
import './HomeContent.css';
import AppSubHeader from '../AppSubHeader/AppSubHeader';

class HomeContent extends Component {
  render() {
    return (
      <div className="home-content">
        <AppSubHeader>
          <div className="level-left">
            <div className="level-item">
              <label htmlFor="input-username" className=""> Your username: </label>
            </div>
            <div className="level-item">
            <input 
              id="input-username" 
              type="text" 
              className="input" />
            </div>
          </div>
        </AppSubHeader>
        
        <div>
          This is the home content.
        </div>
      </div>
    );
  }
}

export default HomeContent;
