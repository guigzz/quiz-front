import React, { Component } from 'react';
import './StatsContent.css';
import AppSubHeader from '../AppSubHeader/AppSubHeader';

class StatsContent extends Component {
  constructor() {
    super();
    
    this.state = {
      stats: null
    };
  }

  componentDidMount() {
    // TODO fetch stats of user
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
              Stats content
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
