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
                  questionNumber={this.props.number} 
                  choiceId={choice.id} 
                  choiceText={choice.text}
                  onChoiceSelected={e => this.props.onQuestionAnswered(choice.id)} /> // passing the choice.id up to the parent
              )
            })}
          </div>
        </div>
      )
    }
  }
  
  export default QuizQuestion;