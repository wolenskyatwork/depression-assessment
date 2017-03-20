import React from 'react';
import Results from '../components/results';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTherapists } from '../actions';

function mapStateToProps(state) {
  return {
    score: state.assessment.score,
    severity: state.severity.severity,
    therapists: state.therapists.therapists,
    threshold: state.severity.threshold,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTherapists }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
