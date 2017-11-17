import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './AppContent.css';
import HomeContent from '../HomeContent/HomeContent';
import QuizContent from '../QuizContent/QuizContent';

class AppContent extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomeContent}/>
        <Route path="/quiz/:id" component={QuizContent} />
      </Switch>
    );
  }
}

export default AppContent;
