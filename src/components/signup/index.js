import React, { PropTypes } from 'react';
import Form from '../form';
import Btn from '../btn';
import './index.css';

const propTypes = {
  closeModal: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
}

class Signup extends React.Component {
  render() {
    const { closeModal, submitForm } = this.props;

    return (
      <div className="signup" >
        <Btn classes='btn--dismiss' text='Dismiss' onClick={ closeModal } />
        <Form onSubmit={ submitForm }/>
      </div>
    );
  }
}

Signup.propTypes = propTypes;

export default Signup;
