import React, { Component } from 'react';
import './StatsContent.css';
import AppSubHeader from '../AppSubHeader/AppSubHeader';
import StatItem from '../StatItem/StatItem';
import format from '../../utils/DateFormatter';
import { BACKEND_URL } from '../../utils/constants.js';

class StatsContent extends Component {
  constructor() {
    super();
    
    this.state = {
      stats: null
    };
  }

  componentDidMount() {
    console.log("fetching stats");
    fetch(BACKEND_URL + '?data=stats&username=' + this.props.match.params.username)
    .then( response => response.json())
    .then( (res) => {
      const sortedRes = res.sort((a, b) => a.quizId - b.quizId);
      this.setState({
        stats: sortedRes
      });
    });
  }
  
  render() {
    return (
      <div className="stats-content">
        <AppSubHeader>
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <span>Statistics of <span className="username">{this.props.match.params.username}</span></span>
              </div>
            </div>
          </div>
        </AppSubHeader>
        <div className="container">
        {
          this.state.stats !== null ?
          (
            <div>
              {this.state.stats.map((quiz) => {
                return (
                  <div className="stats-categ">
                    <h1 className="stats-categ-title">Quiz {quiz.quizId}: {quiz.quizTitle}</h1>
                    <div className="stats-categ-content columns is-multiline is-mobile">
                      {quiz.results.reverse().map((result) => {
                        return (
                          <StatItem result={result.id} date={format(result.id)} score={result.score} />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          )
          :
          <h1>Loading statistics...</h1>
        }
        </div>
      </div>
    );
  }

}

export default StatsContent;
