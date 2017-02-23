import React, { PropTypes } from 'react';
import Btn from '../btn';
import Signup from '../signup';
import Notification from '../notification';
import './index.css';

const propTypes = {
  emails: PropTypes.array,
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
      closeModal,
      dismissNotification,
      emails,
      isModalOpen,
      notificationText,
      openModal,
      submitForm,
    } = this.props;

    return (
      <div className='homepage' >
        { notificationText &&
          <Notification dismissNotification={ dismissNotification } text={ notificationText } />
        }
        <div className='content'>
          <h1 className='content__header'>Welcome to Sign Up</h1>
          <Btn onClick={ openModal } text='Sign me up!' />
          { isModalOpen &&
            <Signup closeModal={ closeModal } submitForm={ submitForm } />
          }
          <h2>People Who Have Signed Up!</h2>
          { emails.length > 0 ?
              emails.map((email, index) => {
                return <div className='content__email' key={ index }>{ email }</div>
              }) :
              <div className='content__empty'>Nobody Yet!</div>
          }
        </div>
      </div>
    );
  }
}

Homepage.propTypes = propTypes;

export default Homepage;
