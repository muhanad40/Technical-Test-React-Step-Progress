import React from 'react';
import Step from 'components/Step';
import { shallow } from 'enzyme';

describe('Step', () => {
  let renderedComponent;
  let props = {
    label: 'Design',
    isActive: false,
  };

  beforeAll(() => {
    renderedComponent = shallow(<Step {...props} />);
  });

  it('should render the correct label', () => {
    expect(renderedComponent.text()).toEqual(props.label);
  });

  it('should not have `step--active` class when isActive prop is set to `false`', () => {
    renderedComponent.setProps({
      isActive: false,
    });

    expect(renderedComponent.getElement().props.className).not.toMatch(/step--active/);
  });

  it('should add `step--active` class when isActive prop is set', () => {
    renderedComponent.setProps({
      isActive: true,
    });

    expect(renderedComponent.getElement().props.className).toMatch(/step--active/);
  });
});
