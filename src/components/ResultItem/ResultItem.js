import React, { Component } from 'react';
import './ResultItem.css';

class ResultItem extends Component {
  render() {
    const goodAnswer = this.props.userAnswerNumber === this.props.goodAnswerNumber;
    const resultClass = goodAnswer ? "right" : "wrong";
    return (
      <div className={`result-item ${resultClass}`}>
        <div className="result-question">Question {this.props.questionNumber}. {this.props.questionText}</div>
        <div className="result-user-answer">Your answer: <strong>{this.props.userAnswerNumber.toUpperCase()}. {this.props.userAnswerText}</strong></div>
        <div className="result-verdict">
          {
            goodAnswer ? 
            <p><strong>Well done!</strong></p>
            : 
            <p>Oh no... the answer was: <strong>{this.props.goodAnswerNumber.toUpperCase()}. {this.props.goodAnswerText}</strong></p>
          }
        </div>
      </div>
    );
  }
}

export default ResultItem;

