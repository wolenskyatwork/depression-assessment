import React, { PropTypes } from 'react';
import './index.css';

const propTypes = {
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

const defaultProps = {
  classes: '',
}

class Btn extends React.Component {
  render() {
    const {
      classes,
      disabled,
      onClick,
      text,
    } = this.props;

    let buttonClasses = 'btn ' + classes;

    if (disabled) {
      buttonClasses += ' btn--isDisabled';
    }

    return (
      <div className={ buttonClasses } disabled={ disabled } onClick={ onClick }>
        { text }
      </div>
    );
  }
}

Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;

export default Btn;
