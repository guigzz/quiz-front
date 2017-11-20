import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ResultContent.css';
import AppSubHeader from '../AppSubHeader/AppSubHeader';
import ResultItem from '../ResultItem/ResultItem';
import format from '../../utils/DateFormatter';

class ResultContent extends Component {
  constructor() {
    super();
    this.state = { // populate the state will render the component
      id: null,
      user: null,
      quiz: null,
      goodCounter: null,
      answers: null
    };
  }
  componentDidMount() {
    const resultId = this.props.match.params.id;
    console.log("results " + resultId);
    
    fetch('http://localhost/?data=result&id=' + resultId)
    .then( response => response.json())
    .then( ({username, quizId, quizTitle, answers, goodAnswerCounter}) => {
      return this.setState({ // populate the state will render the component
        id: resultId,
        user: username,
        quiz: quizId,
        title: quizTitle,
        goodCounter: goodAnswerCounter,
        answers: answers
      });
    });
  }
  
  render() {
    if(this.state.id !== null) {
      return (
        <div className="result-content">
          <AppSubHeader>
            Quiz {this.state.quiz}: {this.state.title}
          </AppSubHeader>
          <h2>Results of {this.state.user} for quiz {this.state.quiz} (submitted: {format(this.state.id)})</h2>
          <h3>Score : {this.state.goodCounter}/{this.state.answers.length}</h3>
          <div>
            {this.state.answers.map((answer) => {
              return <ResultItem 
                key={answer.questionNumber} 
                questionNumber={answer.questionNumber} 
                questionText={answer.questionText} 
                userAnswerNumber={answer.userAnswerNumber} 
                userAnswerText={answer.userAnswerText} 
                goodAnswerNumber={answer.goodAnswerNumber}
                goodAnswerText={answer.goodAnswerText} />
            })}
          </div>
          <Link to="/">Home</Link>
        </div>
      );
    }
    else {
      return <h1>Loading your results...</h1>
    }
  }
}

export default ResultContent;
