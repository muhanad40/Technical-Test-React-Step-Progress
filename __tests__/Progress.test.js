import React from 'react';
import Progress from 'components/Progress';
import { shallow } from 'enzyme';

describe('StepProgress', () => {
  let renderedComponent;
  let props = {
    steps: 5,
    activeStep: 1,
  };

  beforeAll(() => {
    renderedComponent = shallow(<Progress {...props} />);
  });

  it('should set progress bar width to 0 when step 1 is active', () => {
    expect(renderedComponent.find('.step-progress__progress').props().style.width).toEqual('0%');
  });

  it('should set progress bar width to 25% when step 2 is active', () => {
    renderedComponent.setProps({
      activeStep: 2
    });

    expect(renderedComponent.find('.step-progress__progress').props().style.width).toEqual('25%');
  });

  it('should set progress bar width to 75% when step 4 is active', () => {
    renderedComponent.setProps({
      activeStep: 4
    });

    expect(renderedComponent.find('.step-progress__progress').props().style.width).toEqual('75%');
  });

  it('should set progress bar width to 0% when no step is active', () => {
    renderedComponent.setProps({
      activeStep: 0
    });

    expect(renderedComponent.find('.step-progress__progress').props().style.width).toEqual('0%');
  });
});
