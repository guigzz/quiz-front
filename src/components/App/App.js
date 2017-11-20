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
import StatsContent from '../StatsContent/StatsContent'

class App extends Component {

  render() {
    return (
      <div className="app">
        <AppHeader />
        
        <Switch>
          <Route path="/" exact component={HomeContent}/>
          <Route path="/quiz/:id" component={QuizContent}/>
          <Route path="/result/:id" component={ResultContent}/>
          <Route path="/stats/:username" component={StatsContent}/>
        </Switch>
      </div>
    );
  }
}

export default App;
