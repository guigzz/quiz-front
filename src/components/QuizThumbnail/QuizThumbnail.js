import React, { Component } from 'react';
import './QuizThumbnail.css';

class QuizThumbnail extends Component {

  render() {
    const status = this.props.disabled ? "disabled" : "";
    return (
      <div className={`quiz-thumbnail card ${status}`} onClick={this.props.onClick} >
        <div>Quiz {this.props.id} - {this.props.questions} questions</div>
        <div>{this.props.title}</div>
      </div>
    );
  }
}

export default QuizThumbnail;
