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
    let { activeStep, steps } = nextProps;
    let width = activeStep ? (100 / (steps - 1)) * (activeStep - 1) : 0;

    this.setState({ width });
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
