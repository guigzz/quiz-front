import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';
import AppHeader from '../AppHeader/AppHeader.js';
import HomeContent from '../HomeContent/HomeContent';
import QuizContent from '../QuizContent/QuizContent';
import ResultContent from '../ResultContent/ResultContent'
import HOC from '../HOC';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      isUsernameEditable: true
    };
  }

  render() {
    return (
      <div className="app">
        <AppHeader disabled={!this.state.isUsernameEditable} onUsernameChange={this.handleUsernameChange.bind(this)}/>
        
        <Switch>
          <Route path="/" exact component={HomeContent}/>
          <Route path="/quiz/:id" component={HOC(QuizContent, {username: this.state.username})}/>
          <Route path="/result/:id" component={ResultContent}/>
        </Switch>
      </div>
    );
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }
}

export default App;
