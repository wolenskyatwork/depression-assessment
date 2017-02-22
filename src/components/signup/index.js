import React, { PropTypes } from 'react';
import Form from '../form';
import Btn from '../btn';
import FORM from './form';
import './index.css';

const propTypes = {
  closeModal: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
}

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInvalid: true,
    }
  }


  render() {
    const { closeModal, submitForm } = this.props;

    return (
      <div className='signup' >
        <div className='signup__header'>
          <Btn isDismiss onClick={ closeModal } />
        </div>
        <Form onSubmit={ submitForm } inputs={ FORM } />
      </div>
    );
  }
}

Signup.propTypes = propTypes;

export default Signup;
