import React, { Component } from 'react';
import './QuizContent.css';

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
        <div className="home-content">
          <h2>This is the content of quiz {this.state.id} : {this.state.title}</h2>
          <h3>{thisQuestion.number}. {thisQuestion.text}</h3>
          <ul>
            {thisQuestion.choices.map((choice) => <li>{choice.id} - {choice.text}</li>)}
          </ul>
        </div>
      );
    }
  }
}

export default QuizContent;
