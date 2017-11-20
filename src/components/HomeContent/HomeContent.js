import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeContent.css';
import AppSubHeader from '../AppSubHeader/AppSubHeader';
import QuizThumbnail from '../QuizThumbnail/QuizThumbnail';
import Store from '../../utils/Store'; // local storage helper class
import { APP_ID, STATS_FETCH_DELAY } from '../../utils/constants';

class HomeContent extends Component {

  constructor() {
    super();

    this.store = new Store(APP_ID);
    const storeContent = this.store.get();

    this.statsFetchingLock = null; // to handle stats data of user if exist

    this.state = {
      quizzes: [],
      username: storeContent.username,
      displayStatsButton: false
    };
  }

  componentDidMount() {
    fetch('http://localhost/?data=list-quizzes')
    .then( response => response.json())
    .then( (list) => {
      return this.setState({ // populate the state will render the component
        quizzes: list
      });
    });

    // for cases when we land on the homepage
    // and get the username from the store directly,
    // we need to fetch 'stats-exist' route,
    // so as to know if we display the stats button
    this.fetchStatsForUser();
  }

  render() {
    if(this.state.quizzes.length === 0) {
      return <h1>Loading the list of quizzes...</h1>
    }
    else {
      const noUsername = this.usernameIsEmpty();
      return (
        <div className="home-content">
          <AppSubHeader>
            <div className="level-left">
              <div className="level-item">
                <label htmlFor="input-username" className=""> Your username: </label>
              </div>
              <div className="level-item">
              <input 
                id="input-username" 
                type="text" 
                className="input"
                onChange={this.handleUsernameChange.bind(this)} 
                value={this.state.username} />
              </div>
            </div>
            {
              this.state.displayStatsButton ?
              (
              <Link to={`/stats/${this.state.username}`} >
                <div className="level-right">
                  <div className="level-item">
                    <button>Stats</button>
                  </div>
                </div>
              </Link>
              )
              : null
            }
          </AppSubHeader>
  
          <div>
            {this.state.quizzes.map((quiz) => {
              return (
                <QuizThumbnail 
                  key={quiz.id} 
                  id={quiz.id} 
                  questions={quiz.questions} 
                  title={quiz.title} 
                  disabled={noUsername} 
                  onClick={this.handleThumbnailClick.bind(this, quiz)} 
                  />
              );
            })}
          </div>
        </div>
      );
    }
  }

  usernameIsEmpty() {
    return this.state.username.length === 0 || !this.state.username;
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });

    // handle fetching of stats data
    clearTimeout(this.statsFetchingLock);
    this.statsFetchingLock = setTimeout(this.fetchStatsForUser.bind(this), STATS_FETCH_DELAY);
  }

  handleThumbnailClick(quiz, e) {
    console.log("click on quiz " + quiz.id);
    if(this.usernameIsEmpty()) {
      console.log("please enter a username");
      // TODO : display a better modal
      alert("Please enter a username before selecting a quiz");
    }
    else {
      // save the username in the store
      this.store.set({username: this.state.username});
      // start the quiz
      this.props.history.push(`/quiz/${quiz.id}`);
    }

  }

  /**
   * Decide to fetch stats for the username or not
   * 
   */
  fetchStatsForUser() {
    if(!this.usernameIsEmpty()) {
      console.log("fetch stats for user '" + this.state.username + "'");
      fetch('http://localhost/?data=stats-exist&username=' + this.state.username)
      .then( response => response.json())
      .then( ({ result }) => {
        this.setState({
          displayStatsButton: result
        });
      });
    }
  }
}

export default HomeContent;
