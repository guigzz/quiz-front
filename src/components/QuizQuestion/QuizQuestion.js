import React, { Component } from 'react';
import './QuizQuestion.css';
import QuizQuestionChoice from '../QuizQuestionChoice/QuizQuestionChoice';

class QuizQuestion extends Component {
  
    render() {
      return (
        <div className="quiz-question box">
          <div className="question-header title is-3">
            {this.props.number}. {this.props.text}
          </div>
          <div className="question-choices">
            {this.props.choices.map((choice) => {
              return (
                <QuizQuestionChoice 
                  key={choice.id} 
                  questionNumber={this.props.questionNumber} 
                  choiceNumber={choice.id} 
                  choiceText={choice.text} />
              )
            })}
          </div>
        </div>
      )
    }
  }
  
  export default QuizQuestion;