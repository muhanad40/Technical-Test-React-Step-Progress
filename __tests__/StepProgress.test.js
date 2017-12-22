import React from 'react';
import Step from 'components/Step';
import Progress from 'components/Progress';
import StepProgress from 'components/StepProgress';
import { shallow, mount } from 'enzyme';

describe('StepProgress', () => {
  let renderedComponent;
  let renderedSteps;
  let props = {
    stepsLabels: ['Design', 'Build', 'Launch'],
  };

  beforeAll(() => {
    // Spy
    StepProgress.prototype.onStepClick = jest.fn().mockImplementation(StepProgress.prototype.onStepClick);
    renderedComponent = mount(<StepProgress {...props} />);
    renderedSteps = renderedComponent.find(Step);
  });

  beforeEach(() => {
    StepProgress.prototype.onStepClick.mockClear();
  });

  it('should render steps', () => {
    expect(renderedSteps).toHaveLength(props.stepsLabels.length);
  });

  it('should pass the correct steps labels', () => {
    expect(renderedSteps.map((step) => step.props().label)).toEqual(expect.arrayContaining(props.stepsLabels))
  });

  it('should pass incremented IDs', () => {
    expect(renderedSteps.map((step) => step.props().id)).toEqual(expect.arrayContaining([1,2,3]))
  });

  it('should set the correct steps as active', () => {
    renderedComponent.setState({
      activeStep: 2,
    });

    let renderedSteps = renderedComponent.find(Step);

    expect(renderedSteps.at(0).props().isActive).toBe(true);
    expect(renderedSteps.at(1).props().isActive).toBe(true);
    expect(renderedSteps.at(2).props().isActive).toBe(false);
  });

  it('should render `Progress` component with the correct props', () => {
    renderedComponent.setState({
      activeStep: 2,
    });

    let progressComponentProps = renderedComponent.find(Progress).props();

    expect(progressComponentProps.steps).toEqual(props.stepsLabels.length)
    expect(progressComponentProps.activeStep).toEqual(2);
  });

  it('should call `onStepClick` method when a step is clicked passing its index as argument and set it to state', () => {
    renderedComponent.setState({
      activeStep: 1,
    });

    let secondStep = renderedSteps.at(1);

    secondStep.find('div').simulate('click');

    expect(StepProgress.prototype.onStepClick.mock.calls).toHaveLength(1);
    expect(StepProgress.prototype.onStepClick.mock.calls[0][0]).toEqual(2);
    expect(renderedComponent.state().activeStep).toEqual(2);
  });

  it('should not render anything if there is one step label given', () => {
    let renderedComponent = shallow(<StepProgress stepsLabels={['Design']} />);

    expect(renderedComponent.getElement()).toEqual(null);
  });

  it('should not render anything if more than 5 steps labels are given', () => {
    let renderedComponent = shallow(<StepProgress stepsLabels={[
      'Design',
      'Develop',
      'QA',
      'Launch',
      'Feedback',
      'Repeat',
    ]} />);

    expect(renderedComponent.getElement()).toEqual(null);
  });

  it('should not allow user to jump steps both either forwards or backwards', () => {
    renderedComponent.setState({
      activeStep: 3,
    });
    renderedComponent.setProps({
      stepsLabels: [
        'Design',
        'Develop',
        'QA',
        'Launch',
        'Feedback',
      ],
    });
    renderedSteps = renderedComponent.find(Step);

    expect(renderedSteps.at(0).props().isClickable).toEqual(false);
    expect(renderedSteps.at(1).props().isClickable).toEqual(true);
    expect(renderedSteps.at(2).props().isClickable).toEqual(false);
    expect(renderedSteps.at(3).props().isClickable).toEqual(true);
    expect(renderedSteps.at(4).props().isClickable).toEqual(false);
  });
});
