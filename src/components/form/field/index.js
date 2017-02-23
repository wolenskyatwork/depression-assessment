import React, { PropTypes } from 'react';
import './index.css';

const propTypes = {
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  errorMessage: PropTypes.string,
}

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { onChange } = this.props;

    this.setState({
      dirty: true,
    }, onChange(event));
  }

  render() {
    const { name, errorMessage, isValid } = this.props;
    const { dirty } = this.state;

    return (
      <div className='field'>
        <label className='field__label' htmlFor={ name }>
          { name }
        </label>
        <input
          className='field__input'
          id={ name }
          name={ name }
          onChange={ this.onChange } />
        { !isValid && dirty &&
          <div id={`${name}_error`} className='field__error'>{ errorMessage }</div>
        }
      </div>
    );
  }
}

Field.propTypes = propTypes;

export default Field;
