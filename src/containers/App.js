import React from 'react';
import Homepage from '../components/homepage';
import { connect } from 'react-redux';
import '../App.css';

function mapStateToProps(state) {
  return { test: state.test }
}

export default connect(mapStateToProps)(Homepage);
