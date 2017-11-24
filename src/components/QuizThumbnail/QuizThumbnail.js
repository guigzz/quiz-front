import React, { Component } from 'react';
import './QuizThumbnail.css';

class QuizThumbnail extends Component {

  render() {
    const status = this.props.disabled ? "disabled" : "";
    return (
      <div className="column is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd">
        <div 
          className={`${status} quiz-thumbnail card`} 
          onClick={this.props.onClick} >
            <header className="card-header">
              <div className="card-header-title level is-mobile">
                <div className="level-left"><div className="level-item">Quiz {this.props.id}.</div></div>
                <div className="level-right"><div className="level-item">{this.props.questions} questions</div></div>
              </div>
            </header>
            <div className="card-content">
              <div className="content">
                {this.props.title}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default QuizThumbnail;
