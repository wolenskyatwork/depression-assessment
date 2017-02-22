import React, { PropTypes } from 'react';
import Delete from '../../icons/delete';
import './index.css';

const propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isDismiss: PropTypes.bool,
};

const defaultProps = {
  classes: '',
  isDismiss: false,
}

class Btn extends React.Component {
  render() {
    const { classes, text, onClick, isDismiss } = this.props;
    let buttonClasses = 'btn ' + classes;

    if (isDismiss) {
      buttonClasses += ' btn--dismiss';
    }

    return (
      <button className={buttonClasses} onClick={ onClick }>{ text }
        { isDismiss && <Delete /> }
      </button>
    );
  }
}

Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;

export default Btn;
