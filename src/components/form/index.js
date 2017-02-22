import React, { PropTypes } from 'react';
import Btn from '../btn';
import Field from './field';
import './index.css';

const propTypes = {
  inputs: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      regex: PropTypes.regexp,
      message: PropTypes.string,
      defaultValue: PropTypes.string,
    })
  ),
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    const { inputs } = this.props;

    this.inputsArray = Object.values(inputs);

    let stateObject = {};

    for (var formInput in inputs) {
      if(inputs.hasOwnProperty(formInput)) {
        const { name, defaultValue } = inputs[formInput];

        stateObject[name] = {
          value: defaultValue,
          isValid: false,
        }
      }
    }

    this.state = stateObject;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateInput(name, value) {
    const { inputs } = this.props;
    const regex = inputs[name].regex;

    return regex.test(value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: {
        value: value,
        isValid: this.validateInput(name, value),
      },
    });
  }

  render() {
    const stateArray = Object.values(this.state);

    const isInvalid = stateArray.reduce((prev, current) => {
      return prev || !current.isValid;
    }, false);

    return (
      <form className='form'>
        {
          this.inputsArray.map((value, index) => {
            return <Field
              isValid={this.state[value.name].isValid}
              key={index} errorMessage={ value.message }
              name={ value.name }
              onChange={ this.handleChange } />
          })
        }
        <Btn disabled={ isInvalid } text="Sign Up!" onClick={ this.handleSubmit }/>
      </form>
    );
  }
}

Form.propTypes = propTypes;

export default Form;
