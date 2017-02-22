import React, { PropTypes } from 'react';
import Btn from '../btn';
import Field from './field';
import './index.css';

const propTypes = {
  inputs: PropTypes.arrayOf(
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

    let stateObject = {
      isInvalid: true,
    };

    inputs.forEach(value => {
      const { name, defaultValue } = value;

      stateObject[name] = defaultValue;
    });

    this.state = stateObject;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  runValidation() {
    const { inputs } = this.props;
    const isInvalid = inputs.some(currentValue => {
      const { name, regex } = currentValue;

      return !regex.test(this.state[name]);
    });

    this.setState({
      isInvalid: isInvalid,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    }, this.runValidation);
  }

  render() {
    const { inputs } = this.props;
    const { isInvalid } = this.state;

    return (
      <form className='form'>
        {
          inputs.map((value, index) => {
            return <Field key={index} name={value.name} onChange={ this.handleChange } />
          })
        }
        <Btn disabled={ isInvalid } text="Sign Up!" onClick={ this.handleSubmit }/>
      </form>
    );
  }
}

Form.propTypes = propTypes;

export default Form;
