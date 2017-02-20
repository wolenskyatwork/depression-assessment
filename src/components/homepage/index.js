import React from 'react';
import Btn from '../btn';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage" >
        <Btn text="Sign me up!" />
      </div>
    );
  }
}

export default Homepage;
