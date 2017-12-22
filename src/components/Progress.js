import React from 'react';

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.activeStep !== this.props.activeStep;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      width: this.calculateProgressWidth(nextProps.activeStep),
    });
  }

  calculateProgressWidth(stepNumber) {
    return stepNumber ? (100 / (this.props.steps - 1)) * (stepNumber - 1) : 0;
  }

  render() {
    return (
      <div className="step-progress">
        <div className="step-progress__progress" style={{ width: `${this.state.width}%` }}/>
      </div>
    );
  }
}

export default Progress;
