import React from 'react';
import Progress from './Progress';
import Step from './Step';

class StepProgress extends React.Component {
  constructor(props) {
    super(props);

    this.onStepClick = this.onStepClick.bind(this);
    this.state = {
      activeStep: 0,
    };
  }

  onStepClick(stepNumber) {
    this.setState({
      activeStep: stepNumber,
    });
  }

  render() {
    let { stepsLabels } = this.props;

    if (stepsLabels.length < 2 || stepsLabels.length > 5) { return null; }

    return (
      <div className="step-progress-wrapper">
        <Progress steps={stepsLabels.length} activeStep={this.state.activeStep} />

        {stepsLabels.map((step, i) => {
          let uniqueId = i+1;

          return (
            <Step
              key={`${step}_${i}`}
              isActive={uniqueId <= this.state.activeStep}
              isClickable={this.state.activeStep - 1 === uniqueId || this.state.activeStep + 1 === uniqueId}
              id={uniqueId}
              label={step}
              onClick={this.onStepClick}
            />
          );
        })}
      </div>
    );
  }
}

export default StepProgress;
