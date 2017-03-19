import React from 'react';
import Scorer from '../models/scorer';
import './index.css';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.scorer = new Scorer(props.severity);
    
    this.props.getTherapists();
  }

  render() {
    const { score, therapists } = this.props;
    return (
      <div className='results'>
        Results
      </div>
    );
  }


}

export default Results;
