import React, { PropTypes } from 'react';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  errorMessage: PropTypes.string,
}

class Field extends React.Component {
  render() {
    const { name, onChange, errorMessage } = this.props;

    return (
      <div className='field'>
        <label className='field__label' htmlFor={ name }>
          { name }
        </label>
        <input
          id={ name }
          name={ name }
          onChange={ onChange } />
        <div id={`${name}--error`} className='field__error'>{ errorMessage }</div>
      </div>
    );
  }
}

Field.propTypes = propTypes;

export default Field;
