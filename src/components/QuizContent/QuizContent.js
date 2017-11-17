import React, { Component } from 'react';
import './QuizContent.css';

class QuizContent extends Component {

  constructor() {
    super();

    this.state = {
      id: null,
      title: null,
      questions: []
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
        questions: questions
      });
    });
  }

  render() {
    return (
      <p className="home-content">
        This is the content of quiz {this.state.id} : {this.state.title}.
        <br />
        <ul>
          {this.state.questions.map((question) => {
          return (
            <li>{question.number}. {question.text}
              <ul>
                {question.choices.map((choice) => {
                  return (
                    <li>{choice.id} - {choice.text}</li>
                  )
                })}
              </ul>
            </li>
          )})}
          </ul>
      </p>
    );
  }
}

export default QuizContent;
