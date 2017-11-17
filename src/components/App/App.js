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
import HOC from '../HOC';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "guillaume" // TODO
    };
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        
        <Switch>
          <Route path="/" exact component={HomeContent}/>
          <Route path="/quiz/:id" component={HOC(QuizContent, {username: this.state.username})}/>
        </Switch>
      </div>
    );
  }
}

export default App;
