import React from 'react';
import { Link } from 'react-router';
import routes from '../../constants/routes';
import './index.css';

class Homepage extends React.Component {
  render() {
    return (
      <div className='homepage page_wrapper'>
        <div className='content'>
          <h1>Hi There :)</h1>
          <h2>{'Dealing with depression can be hard, but you\'re not alone. Take a quick survey and find out now how to get help. Don\'t worry, the survey is quick and totally anonymous.'}</h2>
          <Link className='btn btn--centered' to={ routes.ASSESSMENT }>Start test</Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
