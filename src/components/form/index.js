import React from 'react';
import Btn from '../btn';
import Field from './field';
import './index.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className='form'>
        <Field name='email' onChange={ this.handleChange }/>
        <Btn text="Sign Up!" onClick={ this.handleSubmit }/>
      </form>
    );
  }
}

export default Form;
