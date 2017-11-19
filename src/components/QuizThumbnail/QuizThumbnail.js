import React, { Component } from 'react';
import './QuizThumbnail.css';

class QuizThumbnail extends Component {

  render() {
    return (
      <div className="quiz-thumbnail">
        <div>Quiz {this.props.id} - {this.props.questions} questions</div>
        <div>{this.props.title}</div>
      </div>
    );
  }
}

export default QuizThumbnail;
