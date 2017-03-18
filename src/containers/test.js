import React from 'react';
import Test from '../components/test';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementStep } from '../actions';

function mapStateToProps(state) {
  return { test: state.test, questions: state.questions }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ incrementStep }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
