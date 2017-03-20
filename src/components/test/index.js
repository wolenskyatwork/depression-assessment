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
      <div className='test content' >
        <div className='question_content'>
          <div className='question_wrapper'>
            <div className='question'>{ question }</div>

            { answers.map((answer, index) => {
              return <div
                className={`answer ${index === points ? 'selected' : '' }`} //TODO: break into component that can handle this as a prop
                key={index}
                onClick={ () => this.selectAnswer(answer.value) }
                >
                  {answer.label}
                </div>
            })}

          </div>

          <div className="action_wrapper">
            {
              step < questions.length - 1 ?
                <Btn disabled={points == null} onClick={ this.incrementStep } text={ 'Next' }/> :
                <Link disabled={points == null} to='/results'>Find out</Link>
            }
          </div>
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
    this.setState({
      points: answer
    });
  }
}

export default Test;
