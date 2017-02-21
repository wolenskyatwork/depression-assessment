import React, { PropTypes } from 'react';
import './index.css';

const propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  classes: '',
}

class Btn extends React.Component {
  render() {
    const { classes, text, onClick } = this.props;
    const buttonClasses = 'btn ' + classes;

    return (
      
      <button className={buttonClasses} onClick={ onClick }>{ text }</button>
    );
  }
}

Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;

export default Btn;
