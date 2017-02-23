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

  submitForm(update) {
    let emails = this.state.emails.slice(0);
    emails.push(update.email.value);

    this.setState({
      isModalOpen: false,
      notificationText: 'Congrats! You have successfully signed up!',
      emails: emails,
    });
  }

  dismissNotification() {
    this.setState({
      notificationText: null,
    });
  }

  render() {
    const { isModalOpen, notificationText, emails } = this.state;

    return (
      <div className="App" >
        <Homepage
          closeModal={ this.closeModal }
          dismissNotification={ this.dismissNotification }
          emails={ emails }
          isModalOpen={ isModalOpen }
          notificationText={ notificationText }
          openModal={ this.openModal }
          submitForm={ this.submitForm }
        />
      </div>
    );
  }
}

export default App;
