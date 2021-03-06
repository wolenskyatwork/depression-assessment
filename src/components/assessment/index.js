import React from 'react';
import Btn from '../btn';
import { Link } from 'react-router';
import classnames from 'classnames';
import routes from '../../constants/routes';
import './index.css';

class Assessment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: null
    };

    this.props.getQuestions();
    this.props.getAnswers();
    this.props.getSeverity();
  }

  componentWillMount() {
    this.props.resetAssessment();
  }

  render() {
    const {
      answers,
      step,
      questions,
    } = this.props;
    const { points } = this.state;
    const question = questions[step];
    const linkClasses = classnames({
      'btn--isDisabled': points == null
    }, 'btn btn--centered');

    return (
      <div className='assessment page_wrapper'>
        <div className='content' >
          <div className='question_wrapper'>
            <div className='question'>{ question }</div>

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
                <Btn
                  centered
                  disabled={points == null}
                  onClick={ this.submitAnswer }
                  text={ 'Next' }/> :
                <Link
                  className={linkClasses}
                  disabled={points == null}
                  onClick={ this.submitAssessment }
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

  submitAssessment = () => {
    const { addPoints } = this.props;
    const { points } = this.state;

    addPoints(points);
  }

  selectAnswer = answer => {
    this.setState({
      points: answer
    });
  }
}

export default Assessment;
