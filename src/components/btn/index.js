import React, { PropTypes } from 'react';

const propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string,
};

const defaultProps = {};

class Btn extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { classes, text } = this.props;

    const className = 'btn' + classes;

    return (
      <button className={className}>{ text }</button>
    );
  }
}

Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;

export default Btn;
