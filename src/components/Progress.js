import React from 'react';

const Progress = (props) => {
  let progressWidth = (100 / (props.steps - 1)) * (props.activeStep - 1);

  return (
    <div className="step-progress">
      <div className="step-progress__progress" style={{ width: `${progressWidth}%` }}/>
    </div>
  );
};

export default Progress;
