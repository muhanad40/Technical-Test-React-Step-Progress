import React from 'react';
import Step from './Step';

const StepProgress = (props) => {
  return (
    <div className="step-progress-wrapper">
      <div className="step-progress">
        <div className="step-progress__progress" />
      </div>

      {props.steps.map((step, i) => (
        <Step key={`${step}_${i}`} label={step} />
      ))}
    </div>
  );
};

export default StepProgress;
