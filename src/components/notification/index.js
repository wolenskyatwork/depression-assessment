import React, { PropTypes } from 'react';
import Btn from '../btn';
import './index.css';

const propTypes = {
  text: PropTypes.string,
};

class Notification extends React.Component {
  render() {
    const { text, dismissNotification } = this.props;

    return (
      <div className='notification'>
        <div className='notification__text'>
          { text }
        </div>
        <Btn onClick={ dismissNotification } isDismiss />
      </div>
    );
  }
}

Notification.propTypes = propTypes;

export default Notification;
