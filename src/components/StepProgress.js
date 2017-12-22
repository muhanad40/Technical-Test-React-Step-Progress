import React from 'react';
import Progress from './Progress';
import Step from './Step';

const StepProgress = (props) => {
  return (
    <div className="step-progress-wrapper">
      <Progress steps={props.stepsLabels.length} activeStep={0} />

      {props.stepsLabels.map((step, i) => (
        <Step key={`${step}_${i}`} label={step} />
      ))}
    </div>
  );
};

export default StepProgress;
