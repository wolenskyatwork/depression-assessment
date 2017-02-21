import React from 'react';
import Btn from '../btn';
import Signup from '../signup';
import Notification from '../notification';
import './index.css';

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
          <h1>Welcome to Sign Up</h1>
          <Btn onClick={ openModal } text="Sign me up!" />
          { isModalOpen &&
            <Signup closeModal={ closeModal } submitForm={ submitForm } />
          }
        </div>
      </div>
    );
  }
}

export default Homepage;
