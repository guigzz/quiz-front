import React, { Component } from 'react';
import './HomeContent.css';
import AppSubHeader from '../AppSubHeader/AppSubHeader';
import QuizThumbnail from '../QuizThumbnail/QuizThumbnail';
import Store from '../../utils/Store'; // local storage helper class
import { APP_ID } from '../../utils/constants';

class HomeContent extends Component {

  constructor() {
    super();
    this.state = {
      quizzes: [],
      username: ""
    };
  }

  componentDidMount() {
    fetch('http://localhost/?data=list-quizzes')
    .then( response => response.json())
    .then( (list) => {
      return this.setState({ // populate the state will render the component
        quizzes: list
      });
    });
  }

  render() {
    if(this.state.quizzes.length === 0) {
      return <h1>Loading the list of quizzes...</h1>
    }
    else {
      const noUsername = this.usernameIsEmpty();
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
                className="input"
                onKeyUp={this.handleUsernameChange.bind(this)} />
              </div>
            </div>
          </AppSubHeader>
  
          <div>
            {this.state.quizzes.map((quiz) => {
              return (
                <QuizThumbnail 
                  key={quiz.id} 
                  id={quiz.id} 
                  questions={quiz.questions} 
                  title={quiz.title} 
                  disabled={noUsername} 
                  onClick={this.handleThumbnailClick.bind(this, quiz)}
                  />
              );
            })}
          </div>
        </div>
      );
    }
  }

  usernameIsEmpty() {
    return this.state.username.length === 0 || !this.state.username;
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleThumbnailClick(quiz, e) {
    console.log("click on quiz " + quiz.id);
    if(this.usernameIsEmpty()) {
      console.log("please enter a username");
      // TODO : display a better modal
      alert("Please enter a username before selecting a quiz");
    }
    else {
      // save the username in the store
      const store = new Store(APP_ID);
      store.set({username: this.state.username});
      // start the quiz
      this.props.history.push(`/quiz/${quiz.id}`);
    }

  }
}

export default HomeContent;
