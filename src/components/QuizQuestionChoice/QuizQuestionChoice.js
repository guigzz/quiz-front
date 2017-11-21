import React, { Component } from 'react';
import './QuizQuestionChoice.css';

class QuizQuestionChoice extends Component {
  
    constructor() {
      super();
      this.state = {
        isMouseOver: false
      }
    }

    render() {
      return (
        <div 
          className="level quiz-question-choice" 
          id={`choice-${this.props.choiceId}`} 
          onClick={this.props.onChoiceSelected} 
          onMouseEnter={this.handleMouseEnter.bind(this)} 
          onMouseLeave={this.handleMouseLeave.bind(this)}> {/*pass the choice to the upper handling function*/}
          <div className="level-left">
            <div className="level-item choice-number-container">
              {this.state.isMouseOver 
                ? <span className="icon primary-text"><i className="fa fa-check-circle"></i></span>
                : <span className="choice-number">{this.props.choiceId.toUpperCase()}.</span>
              }
            </div>
            <div className="level-item">{this.props.choiceText}</div>
          </div>
        </div>
      )
    }

    handleMouseEnter(e) {
      this.setState({
        isMouseOver: true
      });
    }

    handleMouseLeave(e) {
      this.setState({
        isMouseOver: false
      });
    }
  }
  
  export default QuizQuestionChoice;