import React, { PropTypes } from 'react';
import Btn from '../btn';
import Signup from '../signup';
import Notification from '../notification';
import './index.css';

const propTypes = {
  isModalOpen: PropTypes.bool,
  notificationText: PropTypes.string,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  submitForm: PropTypes.func,
  dismissNotification: PropTypes.func,
};

class Homepage extends React.Component {
  render() {
    const {
      isModalOpen,
      notificationText,
      openModal,
      closeModal,
      submitForm,
      dismissNotification,
    } = this.props;

    return (
      <div className="homepage" >
        { notificationText &&
          <Notification dismissNotification={ dismissNotification } text={ notificationText } />
        }
        <div className="content">
          <h1 className="content__header">Welcome to Sign Up</h1>
          <Btn onClick={ openModal } text="Sign me up!" />
          { isModalOpen &&
            <Signup closeModal={ closeModal } submitForm={ submitForm } />
          }
        </div>
      </div>
    );
  }
}

Homepage.propTypes = propTypes;

export default Homepage;
