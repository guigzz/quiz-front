import React, { Component } from 'react';
import './QuizQuestionChoice.css';

class QuizQuestionChoice extends Component {
  
    render() {
      return (
        <label className="quiz-question-choice radio" htmlFor={`choice-${this.props.choiceNumber}`}>
          <input type="radio" id={`choice-${this.props.choiceNumber}`} name={`answer-${this.props.questionNumber}`} />{this.props.choiceText}
        </label>
      )
    }
  }
  
  export default QuizQuestionChoice;