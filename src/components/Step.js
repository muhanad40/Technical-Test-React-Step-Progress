import React from 'react';
import classnames from 'classnames';

const Step = (props) => {
  let {
    id,
    label,
    isActive,
    isClickable,
    onClick,
  } = props;

  return (
    <div onClick={() => {isClickable && onClick(id)}} className={classnames('step', {
      'step--active': isActive,
      'step--clickable': isClickable,
    })}>
      {label}
    </div>
  );
}

export default Step;
