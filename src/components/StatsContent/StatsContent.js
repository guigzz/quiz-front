import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <div className="stat-categ">
                      <h1 className="title is-3">Quiz {quiz.quizId}: {quiz.quizTitle}</h1>
                      <div className="stats-container">
                        {quiz.results.map((result) => {
                          return (
                            <Link to={`/result/${result.id}`}>
                              <StatItem result={result.id} date={format(result.id)} score={result.score} />
                            </Link>
                          )
                        })}
                      </div>
                    </div>
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
