import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeContent.css';
import AppSubHeader from '../AppSubHeader/AppSubHeader';

class HomeContent extends Component {

  constructor() {
    super();
    this.state = {
      quizzes: []
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
            {this.state.quizzes.map((quiz) => {
              return (
                <Link to={`/quiz/${quiz.id}`} >
                  <div key={quiz.id} className="quiz-thumbnail">
                    <div>Quiz {quiz.id} - {quiz.questions} questions</div>
                    <div>{quiz.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default HomeContent;
