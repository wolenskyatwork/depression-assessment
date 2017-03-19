import React from 'react';
import { Link } from 'react-router';
import './index.css';

class Homepage extends React.Component {
  render() {
    return (
      <div className='homepage' >
        <div className='content'>
          <h1 className='content__header'>Hi There</h1>
          <div>{'Dealing with depression can be hard, but you\'re not alone. Take a quick survey and find out now how to get help. Don\'t worry, the survey is quick and totally anonymous.'}</div>
          <Link to='/test'>Start Here!</Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
