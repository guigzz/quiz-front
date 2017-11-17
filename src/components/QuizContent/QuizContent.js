import React, { Component } from 'react';
import './QuizContent.css';

class QuizContent extends Component {
  render() {
    return (
      <p className="home-content">
        This is the content of quiz {this.props.match.params.id}.
      </p>
    );
  }
}

export default QuizContent;
