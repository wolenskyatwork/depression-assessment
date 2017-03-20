import React from 'react';
import Scorer from '../models/scorer';
import { Link } from 'react-router';
import routes from '../../constants/routes'
import './index.css';
import { therapistText, otherText, emptyResultsText } from './text';

class Results extends React.Component {
  constructor(props) {
    super(props);

    const {
      getTherapists,
      score,
      severity,
      threshold,
    } = props;

    this.scorer = null;

    if(score != null) {
      this.scorer = new Scorer(severity, score, threshold);

      if(this.scorer.shouldSeeTherapist) {
        getTherapists();
      }
    }
}

  alertUser = () => {
    alert('You\'ve selected a therapist!');
  }

  renderTherapists() {
    const { therapists } = this.props;

    if(this.scorer.shouldSeeTherapist) {
      return (
        <div className='results__therapists'>
          { therapists.map((therapist, index) => {
            return (
              <div className='results__therapist btn' key={index} onClick={this.alertUser}>{therapist.name}</div>
            );
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div className='results page_wrapper'>
        <div className='content'>
          { this.scorer ?
            <div>
              <h1>{`You scored ${this.scorer.level}.`}</h1>
              <h2 className='results__score'>{this.scorer.shouldSeeTherapist ? therapistText : otherText }</h2>
              { this.renderTherapists() }
              </div> :
            <div>
              <h2>{emptyResultsText}</h2>
              <Link className='btn btn--centered' to={routes.TEST}>Start test</Link>
            </div>
          }
        </div>
      </div>
    );
  }


}

export default Results;
