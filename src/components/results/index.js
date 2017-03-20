import React from 'react';
import Scorer from '../models/scorer';
import './index.css';

class Results extends React.Component {
  constructor(props) {
    super(props);

    const {
      getTherapists,
      score,
      severity,
      threshold, 
    } = props;

    this.scorer = new Scorer(severity, score, threshold);

    if(this.scorer.shouldSeeTherapist) {
      getTherapists();
    }
}

  alertUser = () => {
    alert('You\'ve selected a therapist!');
  }

  renderTherapists() {
    const { therapists } = this.props;

    if(this.scorer.shouldSeeTherapist) {
      return (
        <div>
          { therapists.map((therapist, index) => {
            return (
              <div key={index} onClick={this.alertUser}>{therapist.name}</div>
            );
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div className='results'>
        Results

        <div>Your score{this.props.score}</div>
        <div>{`You scored: ${this.scorer.level}`}</div>
        { this.renderTherapists() }
      </div>
    );
  }


}

export default Results;
