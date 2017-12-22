import React from 'react';
import classnames from 'classnames';

const Step = (props) => {
  let {
    id,
    label,
    isActive,
    onClick,
  } = props;

  return (
    <div onClick={() => {onClick(id)}} className={classnames('step',
      {'step--active': isActive
    })}>
      {label}
    </div>
  );
}

export default Step;
