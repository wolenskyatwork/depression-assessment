import React from 'react';
import Test from '../components/test';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementStep, getSeverity } from '../actions';

//need to update api to not require questions.questions && answers.answers
function mapStateToProps(state) {
  return {
    answers: state.answers.answers,
    questions: state.questions.questions,
    score: state.test.score,
    step: state.test.step,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ incrementStep, getSeverity }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
