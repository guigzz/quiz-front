import React, { Component } from 'react';
import './StatsContent.css';
import AppSubHeader from '../AppSubHeader/AppSubHeader';
import format from '../../utils/DateFormatter';

class StatsContent extends Component {
  constructor() {
    super();
    
    this.state = {
      stats: null
    };
  }

  componentDidMount() {
    console.log("fetching stats");
    fetch('http://localhost/?data=stats&username=' + this.props.match.params.username)
    .then( response => response.json())
    .then( (res) => {
      this.setState({
        stats: res
      });
    });
  }
  
  render() {
    return (
      <div>
        <AppSubHeader>
          Statistics of {this.props.match.params.username}
        </AppSubHeader>
        {
          this.state.stats !== null ?
          (
            <div className="stats-content">
              <ul>
                {this.state.stats.map((quiz) => {
                  return (
                    <li>Quiz {quiz.quizId}: {quiz.quizTitle}
                      <ul>
                        {quiz.results.map((result) => {
                          return <li>{format(result.id)}, your score : {result.score}</li>
                        })}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
          :
          <h1>Loading statistics...</h1>
        }
      </div>
    );
  }

}

export default StatsContent;
