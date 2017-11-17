import React, { Component } from 'react';
import './QuizContent.css';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

class QuizContent extends Component {

  constructor() {
    super();

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
    
    fetch('http://localhost/?data=quiz&id=' + quizId)
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
    const thisQuestion = this.state.questions.find((question) => question.number === this.state.current )

    if(typeof(thisQuestion) === 'undefined') { // the first render is prior to data fetching, so we'll pass here once
      return <h1>Loading...</h1>; // TODO : put a real nice loading component or animation
    }
    else {
      return (
        <QuizQuestion 
          number={thisQuestion.number} 
          text={thisQuestion.text} 
          choices={thisQuestion.choices} />
      );
    }
  }
}

export default QuizContent;
