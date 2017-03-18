import React from 'react';
import Homepage from '../components/homepage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuestions, incrementStep } from '../actions';
import '../App.css';

function mapStateToProps(state) {
  return { test: state.test, questions: state.questions }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getQuestions, incrementStep }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
