import React from 'react';
import Homepage from './components/homepage';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      notificationText: null,
      emails: [],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.dismissNotification = this.dismissNotification.bind(this);
  }

  openModal() {
    this.setState({
      isModalOpen: true,
      notificationText: null,
    });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  submitForm(email) {
    this.setState({
      isModalOpen: false,
      notificationText: 'Congrats! You have successfully signed up!',
      emails: [], // new user functonality
    });
  }

  dismissNotification() {
    this.setState({
      notificationText: null,
    });
  }

  render() {
    const { isModalOpen, notificationText } = this.state;

    return (
      <div className="App" >
        <Homepage
          isModalOpen={ isModalOpen }
          notificationText={ notificationText }
          closeModal={ this.closeModal }
          openModal={ this.openModal }
          submitForm={ this.submitForm }
          dismissNotification={ this.dismissNotification }
        />
      </div>
    );
  }
}

export default App;
