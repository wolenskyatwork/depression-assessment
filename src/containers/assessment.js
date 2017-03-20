import React from 'react';
import Assessment from '../components/assessment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addPoints,
  getAnswers,
  getQuestions,
  getSeverity,
  incrementStep,
  resetAssessment,
} from '../actions';

function mapStateToProps(state) {
  return {
    answers: state.answers.answers,
    questions: state.questions.questions,
    score: state.assessment.score,
    step: state.assessment.step,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPoints,
    getAnswers,
    getQuestions,
    getSeverity,
    incrementStep,
    resetAssessment,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
