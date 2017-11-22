import React, { Component } from 'react';
import './QuizQuestion.css';
import QuizQuestionChoice from '../QuizQuestionChoice/QuizQuestionChoice';

class QuizQuestion extends Component {
  
    render() {
      return (
        <div className="columns is-centered">
          <div className="column is-two-thirds-tablet is-two-thirds-desktop is-half-widescreen is-half-fullhd">
            <div className="quiz-question card">
              <header className="card-header">
                <p className="card-header-title">
                {this.props.number}. {this.props.text}
                </p>
              </header>
              <div className="question-choices">
                <div className="content">
                  {this.props.choices.map((choice) => {
                    return (
                      <QuizQuestionChoice 
                        key={choice.id} 
                        questionNumber={this.props.number} 
                        choiceId={choice.id} 
                        choiceText={choice.text}
                        onChoiceSelected={e => this.props.onQuestionAnswered(choice.id)} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default QuizQuestion;