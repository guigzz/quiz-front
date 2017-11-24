import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ResultContent.css';
import AppSubHeader from '../AppSubHeader/AppSubHeader';
import ResultItem from '../ResultItem/ResultItem';
import Loader from '../Loader/Loader';
import format from '../../utils/DateFormatter';
import { BACKEND_URL } from '../../utils/constants.js';

class ResultContent extends Component {
  constructor() {
    super();
    this.state = { // populate the state will render the component
      id: null,
      user: null,
      quiz: null,
      goodCounter: null,
      answers: null,
      showAnswers: false
    };
  }
  componentDidMount() {
    const resultId = this.props.match.params.id;
    console.log("results " + resultId);
    
    fetch(BACKEND_URL + '?data=result&id=' + resultId)
    .then( response => response.json())
    .then( ({username, quizId, quizTitle, answers, goodAnswerCounter}) => {
      return this.setState({ // populate the state will render the component
        id: resultId,
        user: username,
        quiz: quizId,
        title: quizTitle,
        goodCounter: goodAnswerCounter,
        answers: answers
      });
    });
  }
  
  render() {
    if(this.state.id !== null) {
      return (
        <div className="result-content">
          <AppSubHeader>
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <span>Results of <span className="username">{this.state.user}</span> ({format(this.state.id)})</span>
                  {/* Quiz {this.state.quiz}: {this.state.title} */}
                </div>
              </div>
            </div>
          </AppSubHeader>
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-two-thirds-tablet is-two-thirds-desktop is-half-widescreen is-half-fullhd">
                <div className="result-card card">
                  <header className="card-header">
                    <p className="card-header-title">
                      Quiz {this.state.quiz}: {this.state.title}
                    </p>
                  </header>
                  <div className="result-card-content">
                    <div className="content">
                      <div className="content-score">
                        <span className="score-text">Your score:</span>
                        <br />
                        <span className="score-content">{this.state.goodCounter}/{this.state.answers.length}</span>
                      </div>
                      <div className="content-home-btn">
                        <Link to="/">
                          <button 
                            className="button primary-btn" 
                            title="Go to the homepage" 
                            onClick={this.handleToggleButtonClick.bind(this)}>
                            <span className="icon is-large">
                              <i className="fa fa-home"></i>
                            </span>
                            <span>Home</span>
                          </button>
                        </Link>
                      </div>
                      <div className="content-retry-btn">
                        <Link to={`/quiz/${this.state.quiz}`}>
                          <button 
                            className="button primary-btn" 
                            title="Try this quiz again" 
                            onClick={this.handleToggleButtonClick.bind(this)}>
                            <span className="icon is-large">
                              <i className="fa fa-repeat"></i>
                            </span>
                            <span>Retry</span>
                          </button>
                        </Link>
                      </div>
                      <div className="content-show-btn">
                        <button 
                          className="button secondary-btn show-detail-btn" 
                          title={this.state.showAnswers ? "Hide answers" : "Show answers"} 
                          onClick={this.handleToggleButtonClick.bind(this)} >
                          <span className="icon is-large">
                            {this.state.showAnswers ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                          </span>
                          <span>answers</span>
                        </button>
                      </div>
                      {this.state.showAnswers 
                        ? <div className="content-detail">
                            {this.state.answers.map((answer) => {
                              return <ResultItem 
                                key={answer.questionNumber} 
                                questionNumber={answer.questionNumber} 
                                questionText={answer.questionText} 
                                userAnswerNumber={answer.userAnswerNumber} 
                                userAnswerText={answer.userAnswerText} 
                                goodAnswerNumber={answer.goodAnswerNumber}
                                goodAnswerText={answer.goodAnswerText} />
                            })}
                          </div>
                        : null
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="container">
          <Loader text="Loading your results..."/>
        </div>
      )
    }
  }

  handleToggleButtonClick(e) {
    const isVisible = this.state.showAnswers;
    this.setState({
      showAnswers: !isVisible
    });
  }
}

export default ResultContent;
