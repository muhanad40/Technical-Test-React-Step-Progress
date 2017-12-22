import React from 'react';
import classnames from 'classnames';

const Step = (props) => (
  <div className={classnames('step',
    {'step--active': props.isActive
  })}>
    {props.label}
  </div>
);

export default Step;
