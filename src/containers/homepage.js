import React from 'react';
import Homepage from '../components/homepage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuestions, getAnswers } from '../actions';
import '../App.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getQuestions, getAnswers }, dispatch)
}

export default connect(null, mapDispatchToProps)(Homepage);
