import React from 'react';

const StepProgress = () => {
  return (
    <div className="step-progress-wrapper">
      <div className="step-progress">
        <div className="step-progress__progress" />
      </div>

      <div className="step step--active">
        Step 1
      </div>

      <div className="step step--active">
        Step 2
      </div>

      <div className="step">
        Step 3
      </div>
    </div>
  );
};

export default StepProgress;
