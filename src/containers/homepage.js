import React from 'react';
import Homepage from '../components/homepage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuestions, incrementStep } from '../actions';
import '../App.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getQuestions }, dispatch)
}

export default connect(null, mapDispatchToProps)(Homepage);
