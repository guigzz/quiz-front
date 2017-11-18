import React, { Component } from 'react';
import './ResultContent.css';

class ResultContent extends Component {
  constructor() {
    super();
    this.state = { // populate the state will render the component
      id: null,
      user: null,
      quiz: null,
      answers: null
    };
  }
  componentDidMount() {
    const resultId = this.props.match.params.id;
    console.log("results " + resultId);
    
    fetch('http://localhost/?data=result&id=' + resultId)
    .then( response => response.json())
    .then( ({username, quizId, answers}) => {
      return this.setState({ // populate the state will render the component
        id: resultId,
        user: username,
        quiz: quizId,
        answers: answers
      });
    });
  }
  
  render() {
    return (
      <div className="result-content">
        <h2>Results of {this.state.user} for quiz {this.state.quiz} (submitted: {this.getDateFromTimestamp(this.state.id)})</h2>
      </div>
    );
  }

  /**
   * Get a human readable date from a unix timestamp in second
   * @param {int} t a Unix timestamp in second 
   */
  getDateFromTimestamp(t) {
    const date = new Date(t*1000);
    // Year part from the timestamp
    const year = date.getFullYear();
    // month part from the timestamp
    const month = "0" + (date.getMonth() + 1);
    // day part from the timestamp
    const day = "0" + date.getDate();
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    return `${year}/${month.substr(-2)}/${day.substr(-2)} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
  }
}

export default ResultContent;
