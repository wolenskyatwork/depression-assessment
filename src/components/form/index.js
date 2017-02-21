import React from 'react';
import Btn from '../btn';
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
        <div className='input--wrapper'>
          <label className='input--label' for='email'>
            email
          </label>
          <input
            id="email"
            name="email"
            onChange={ this.handleChange } />
          <div id='email-error' className='input--error'>Error message here</div>
        </div>
        <div className-='input--wrapper'>
          <label>
            password
            <input
              name="password"
              onChange={ this.handleChange } />
          </label>
        </div>
        <Btn text="Sign Up!" onClick={ this.handleSubmit }/>
      </form>
    );
  }
}

export default Form;
