import React, { Component } from 'react';
import './AppHeader.css';

class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <h1 className="app-header-title">The Awesome Quiz</h1>
        <div className="level app-subheader">
          <div className="level-left">
            <div className="level-item">
              <label htmlFor="input-username" className=""> Your username: </label>
            </div>
            <div className="level-item">
            <input 
              id="input-username" 
                type="text" 
                className="input" 
                onKeyUp={this.props.onUsernameChange}
                disabled={this.props.disabled}/>
            </div>
          </div>
          
        </div>
      </header>
    );
  }
}

export default AppHeader;
