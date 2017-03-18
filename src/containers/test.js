import React from 'react';
import Test from '../components/test';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementStep } from '../actions';

//need to update api to not require questions.questions && answers.answers
function mapStateToProps(state) {
  const step = state.test.step;
  return {
    question: state.questions.questions[step],
    answers: state.answers.answers
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ incrementStep }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
