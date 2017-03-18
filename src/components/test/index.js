import React from 'react';
import Btn from '../btn';
import './index.css';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: 0
    };
  }

  render() {
    const { answers, question, incrementStep } = this.props;

    return (
      <div className='test' >
        <div className='question'>
          { question || 'fake text until better reloading solution employed' }

          <div>
            <select>
              {
                answers.map((answer, index) => {
                  return (
                    <option key={index} value={answer.value}>{answer.text}</option>
                  );
                })
              }
            </select>
          </div>

          <Btn onClick={ incrementStep } text={ 'Next' }/>
        </div>
      </div>
    );
  }

  selectAnswer(answer) {
    console.log(answer);

    this.setState({
      points: answer
    });
  }
}

export default Test;
