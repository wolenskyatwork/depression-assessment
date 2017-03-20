import React from 'react';
import Btn from '../btn';
import { Link } from 'react-router';
import classnames from 'classnames';
import routes from '../../constants/routes';
import './index.css';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: null
    };

    this.props.getQuestions();
    this.props.getAnswers();
    this.props.getSeverity();
}

  render() {
    const {
      answers,
      step,
      questions,
    } = this.props;
    const { points } = this.state;
    const question = questions[step];

    return (
      <div className='test content' >
        <div className='question_content'>
          <div className='question_wrapper'>
            <div className='question title'>{ question }</div>

            { answers.map((answer, index) => {
              const answerClasses = classnames({
                selected: index === points
              }, 'answer');

              return <div
                className={answerClasses}
                key={index}
                onClick={ () => this.selectAnswer(answer.value) }
                >{answer.label}
                </div>
            })}

          </div>

          <div className="action_wrapper">
            {
              step < questions.length - 1 ?
                <Btn disabled={points == null} onClick={ this.submitAnswer } text={ 'Next' }/> :
                <Link
                  className='btn'
                  disabled={points == null}
                  onClick={ this.submitTest }
                  to={ routes.RESULTS }
                >Find out</Link>
            }
          </div>
        </div>
      </div>
    );
  }

  submitAnswer = () => {
    const { incrementStep, addPoints } = this.props;
    const { points } = this.state;
    incrementStep();
    addPoints(points);

    this.setState({
      points: null
    });
  }

  submitTest = () => {
    const { addPoints, resetTest } = this.props;
    const { points } = this.state;

    addPoints(points);
    resetTest();
  }

  selectAnswer = answer => {
    this.setState({
      points: answer
    });
  }
}

export default Test;
