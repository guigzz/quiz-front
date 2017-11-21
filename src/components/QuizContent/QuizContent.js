import React, { Component } from 'react';
import './QuizContent.css';
import AppSubHeader from '../AppSubHeader/AppSubHeader';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import Store from '../../utils/Store';
import { APP_ID, BACKEND_URL } from '../../utils/constants.js';

class QuizContent extends Component {

  constructor() {
    super();
    // get the username from the local storage
    this.store = new Store(APP_ID);
    const storeContent = this.store.get();
    this.username = storeContent.username;

    this.state = {
      id: null,
      title: null,
      questions: [],
      current: null, // current question number
      answers: [] // the answers of the user
    }
  }

  componentDidMount() {
    const quizId = this.props.match.params.id;
    console.log("will fetch quiz " + quizId);
    
    fetch(BACKEND_URL + '?data=quiz&id=' + quizId)
    .then( response => response.json())
    .then( ({id, title, questions}) => {
      return this.setState({ // populate the state will render the component
        id: id, 
        title: title,
        questions: questions,
        current: 1
      });
    });
  }

  render() {
    if( this.state.current === null) {
      // no data fetched yet, wait
      return (
        <div className="container">
          <h1>Loading quiz...</h1>
        </div>
        ); // TODO : put a real nice loading component or animation
    }
    if( this.state.current > this.state.questions.length) {
      // this question does not exists, we have finished the quiz
      return (
        <div className="container">
          <h1>Loading your results...</h1>
        </div>
        ); // TODO : put a real nice loading component or animation
    }

    const thisQuestion = this.state.questions.find((question) => question.number === this.state.current )

    if(typeof(thisQuestion) === 'undefined') {
      return (
        <div className="container">
          <h1>Oops, something went wrong...</h1>
        </div>
        ); // TODO : put a real nice loading component or animation
    }

    return (
      <div className="quiz-content">
        <AppSubHeader>
          <div className="level-left">
            <div className="level-item">
              {this.state.title !== null ? this.state.title : null}
            </div>
          </div>
        </AppSubHeader>
        <div className="container">
          <QuizQuestion 
            number={thisQuestion.number} 
            text={thisQuestion.text} 
            choices={thisQuestion.choices} 
            onQuestionAnswered={(answer) => this.handleQuestionAnswered(answer)} /> {/* get the user choice */} 
        </div>
      </div>
    );
  }

  handleQuestionAnswered(answer) {
    console.log("answer: " + answer);

    const currentQuestionNumber = this.state.current;
    const currentAnswers = this.state.answers;

    console.log("currentQuestionNUmber: " + currentQuestionNumber);
    // save the answer
    // update question counter
    this.setState({
      current: currentQuestionNumber + 1,
      answers : [
        ...currentAnswers,
        {question: currentQuestionNumber, choice: answer}
      ]
    });

    if(currentQuestionNumber === this.state.questions.length) {
      // we are at the end of the quiz
      // post answers to the servers
      const postData = {
        username: this.username,
        quizId: this.state.id,
        answers: [
          ...currentAnswers,
          {question: currentQuestionNumber, choice: answer}
        ]
      }
      this.postAnswers(postData);
    }
  }

  postAnswers(data) {
    console.log("Will post data : "); console.log(data);
    fetch(BACKEND_URL, {
      method: 'post',
      body: JSON.stringify(data)
    })
    .then( response => response.json())
    .then( ({resultId}) => {
      console.log("answers have been stored under the result ID : " + resultId);
      // redirect to the result page
      this.props.history.replace(`/result/${resultId}`);
      // if we don't want to keep the username in the HomeContent input field later:
      this.clearUsername();
    });
  }

  /**
   * Clear the username field of the local store,
   * so when navigating back to HomeContent,
   * the input filed 'username' is empty
   */
  clearUsername() {
    this.store.clear();
  }
}

export default QuizContent;
