import React from 'react';
import Step from 'components/Step';
import StepProgress from 'components/StepProgress';
import { shallow } from 'enzyme';

describe('StepProgress', () => {
  let renderedComponent;
  let renderedSteps;
  let props = {
    steps: ['Design', 'Build', 'Launch'],
  };

  beforeAll(() => {
    renderedComponent = shallow(<StepProgress {...props} />);
    renderedSteps = renderedComponent.find(Step);
  });

  it('should render steps', () => {
    expect(renderedSteps).toHaveLength(props.steps.length);
  });

  it('should pass the correct steps labels', () => {
    expect(renderedSteps.map((step) => step.props().label)).toEqual(expect.arrayContaining(props.steps))
  });
});
