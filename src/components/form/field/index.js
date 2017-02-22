import React, { PropTypes } from 'react';
import './index.css';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  errorMessage: PropTypes.string,
}

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false,
    };
  }

  onChange() {
    const { onChange } = this.props;

    this.setState({
      dirty: true,
    }, onChange);
  }

  render() {
    const { name, onChange, errorMessage } = this.props;
    const { dirty } = this.state;

    return (
      <div className='field'>
        <label className='field__label' htmlFor={ name }>
          { name }
        </label>
        <input
          id={ name }
          name={ name }
          onChange={ onChange } />
        { errorMessage && dirty &&
          <div id={`${name}--error`} className='field__error'>{ errorMessage }</div>
        }
      </div>
    );
  }
}

Field.propTypes = propTypes;

export default Field;
