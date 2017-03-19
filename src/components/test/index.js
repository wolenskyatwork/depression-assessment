import React from 'react';
import Btn from '../btn';
import Dropdown from 'react-dropdown';
import './index.css';
import { Link } from 'react-router';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: null
    };

    this.props.getQuestions();
    this.props.getAnswers();
    this.props.getSeverity();

    this.selectAnswer = this.selectAnswer.bind(this);
    this.incrementStep = this.incrementStep.bind(this);
  }

  render() {
    const {
      answers,
      step,
      questions,
      score,
    } = this.props;
    const { points } = this.state;
    const question = questions[step];

    return (
      <div className='test' >
        <div className='question'>
          { question }

          <Dropdown
            options={ answers }
            onChange={ this.selectAnswer }
            value={ answers[points] }
            placeholder="Select an option"
          />

          {
            step < questions.length - 1 ?
              <Btn disabled={!points} onClick={ this.incrementStep } text={ 'Next' }/> :
              <Link disabled={!points} to='/results'>Find out</Link>
          }

        </div>

        <div>
          {`Your score: ${score}`}
        </div>
      </div>
    );
  }

  incrementStep() {
    const { incrementStep } = this.props;
    const { points } = this.state;
    incrementStep(points);

    this.setState({
      points: null
    })
  }

  selectAnswer(answer) {
    //this hack fixes a bug w/ the library react-dropdown :(
    if(!Number.isInteger(answer.value)) {
      answer.value = 0;
    }

    this.setState({
      points: answer.value
    });
  }
}

export default Test;
