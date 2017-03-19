import React from 'react';
import Results from '../components/results';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTherapists } from '../actions';

function mapStateToProps(state) {
  return {
    score: state.test.score,
    severity: state.test.severity,
    therapists: state.therapists.therapists,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTherapists }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
