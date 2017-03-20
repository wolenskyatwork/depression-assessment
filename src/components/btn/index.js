import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './index.css';

const propTypes = {
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

class Btn extends React.Component {
  render() {
    const {
      classes,
      disabled,
      onClick,
      text,
    } = this.props;

    const buttonClasses = classnames({
      'btn--isDisabled': disabled,
    }, classes, 'btn');

    return (
      <div className={ buttonClasses } disabled={ disabled } onClick={ onClick }>
        { text }
      </div>
    );
  }
}

Btn.propTypes = propTypes;

export default Btn;
