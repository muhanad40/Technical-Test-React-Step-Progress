import React from 'react';
import Step from 'components/Step';
import { shallow } from 'enzyme';

describe('Step', () => {
  let renderedComponent;
  let props = {
    id: 2,
    label: 'Design',
    isActive: false,
    onClick: jest.fn()
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

  it('should trigger onClick prop when clicked and pass the id', () => {
    let stepEl = renderedComponent.find('.step');

    stepEl.simulate('click');

    expect(props.onClick.mock.calls).toHaveLength(1);
    expect(props.onClick.mock.calls[0][0]).toEqual(props.id);
  })
});
