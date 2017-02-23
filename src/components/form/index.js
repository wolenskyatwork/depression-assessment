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

    this.inputsArray = [];

    Object.keys(inputs).forEach(key => {
      this.inputsArray.push(inputs[key]);
    });

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
    let stateArray = [];

    Object.keys(this.state).forEach(key => {
      stateArray.push(this.state[key]);
    });

    const isInvalid = stateArray.reduce((prev, current) => {
      return prev || !current.isValid;
    }, false);

    return (
      <form className='form'>
        <div className="form__fields">
        {
          this.inputsArray.map((value, index) => {
            return <Field
              isValid={this.state[value.name].isValid}
              key={index} errorMessage={ value.message }
              name={ value.name }
              onChange={ this.handleChange } />
          })
        }
        </div>
        <Btn disabled={ isInvalid } text="Sign Up!" onClick={ this.handleSubmit }/>
      </form>
    );
  }
}

Form.propTypes = propTypes;

export default Form;
