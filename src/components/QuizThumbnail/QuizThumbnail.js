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
            <header className="card-header">
              <p className="card-header-title level is-mobile">
                <div class="level-left"><div class="level-item">Quiz {this.props.id}.</div></div>
                <div class="level-right"><div class="level-item">{this.props.questions} questions</div></div>
              </p>
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
