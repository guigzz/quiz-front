import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StatItem.css';

class StatItem extends Component {
  render() {
    return (
      <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen is-one-fifth-fullhd">
        <Link to={`/result/${this.props.result}`} >
          <div className="stat-item card">
            <header className="card-header">
              <p className="card-header-title primary-text">{this.props.date}</p>
            </header>
            <div className="card-content">
              <div className="content regular-text">
                <span className="score-text">Score:</span>
                <br />
                <span className="score-content">{this.props.score}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default StatItem;

