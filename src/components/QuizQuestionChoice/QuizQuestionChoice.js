import React, { Component } from 'react';
import './QuizQuestionChoice.css';

class QuizQuestionChoice extends Component {
  
    render() {
      return (
        <label 
          className="quiz-question-choice radio" 
          htmlFor={`choice-${this.props.choiceId}`} 
        >
          <input 
            type="radio" 
            id={`choice-${this.props.choiceId}`} 
            name={`answer-${this.props.questionNumber}`} 
            onClick={this.props.onChoiceSelected}  //pass the choice to the upper handling function
          /> {this.props.choiceText}
        </label>
      )
    }
  }
  
  export default QuizQuestionChoice;