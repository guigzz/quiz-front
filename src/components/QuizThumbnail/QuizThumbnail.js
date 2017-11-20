import React, { Component } from 'react';
import './QuizThumbnail.css';

class QuizThumbnail extends Component {

  render() {
    const status = this.props.disabled ? "disabled" : "";
    return (
      <div className="column is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <div 
          className={`${status} quiz-thumbnail card`} 
          onClick={this.props.onClick} >
          <div>Quiz {this.props.id} - {this.props.questions} questions</div>
          <div>{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default QuizThumbnail;
