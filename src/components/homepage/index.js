import React, { PropTypes } from 'react';
import Btn from '../btn';
import './index.css';

class Homepage extends React.Component {
  componentWillMount() {
    //dispatch action to get questions
    //axios.get('http://localhost:3000/bikes/1').
    //then( function(response) {
    //  console.log(response);
    //});
  }

  render() {
    console.log(this.props);
    console.log('TRYING HOMPEAGE');
    return (
      <div className='homepage' >
        <div className='content'>
          <h1 className='content__header'>Hi There</h1>
          <div>{'Dealing with depression can be hard, but you\'re not alone. Take a quick survey and find out now how to get help. Don\'t worry, the survey is quick and totally anonymous.'}</div>
          <Btn onClick={ () => console.log('hello') } text='Start here!' />
        </div>
      </div>
    );
  }
}

export default Homepage;
