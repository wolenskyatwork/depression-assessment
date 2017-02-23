import React, { PropTypes } from 'react';
import Delete from '../../icons/delete';
import './index.css';

const propTypes = {
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  isDismiss: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

const defaultProps = {
  classes: '',
  isDismiss: false,
}

class Btn extends React.Component {
  render() {
    const {
      classes,
      disabled,
      isDismiss,
      onClick,
      text,
    } = this.props;

    let buttonClasses = 'btn ' + classes;

    if (isDismiss) {
      buttonClasses += ' btn--dismiss';
    }

    if (disabled) {
      buttonClasses += ' btn--isDisabled';
    }

    return (
      <button className={ buttonClasses } disabled={ disabled } onClick={ onClick }>
        { text }
        { isDismiss && <Delete /> }
      </button>
    );
  }
}

Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;

export default Btn;
