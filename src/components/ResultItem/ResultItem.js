import React, { Component } from 'react';
import './ResultItem.css';

class ResultItem extends Component {
  render() {
    const goodAnswer = this.props.userAnswerNumber === this.props.goodAnswerNumber;
    const resultClass = goodAnswer ? "right" : "wrong";
    return (
      <div className={`result-item ${resultClass}`}>
        <div className="columns">
          <div className="column result-item-question">
            <p>Question {this.props.questionNumber}. <span className="bold">{this.props.questionText}</span></p>
          </div>
        </div>
        <div className="columns is-mobile result-item-user">
          <div className="column is-narrow result-item-user-icon-container">
            {goodAnswer 
              ? <span className="icon primary-text"><i className="fa fa-check"></i></span>
              : <span className="icon danger-text"><i className="fa fa-times"></i></span>
            }
            
          </div>
          <div className="column result-item-user-answer-container">
            <p className={goodAnswer ? "primary-text" : "danger-text"}>{this.props.userAnswerNumber.toUpperCase()}. {this.props.userAnswerText}</p>
          </div>
        </div>
        {!goodAnswer 
          ? (
            <div className="columns">
              <div className="column result-item-correct">
                <p>The answer was: <span className="bold">{this.props.goodAnswerNumber.toUpperCase()}. {this.props.goodAnswerText}</span></p>
              </div>
            </div>
          )
          : null
        }
        
      </div>
    );
  }
}

export default ResultItem;

