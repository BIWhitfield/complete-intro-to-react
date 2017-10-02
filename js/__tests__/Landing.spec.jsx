import React from 'react';
import { shallow } from 'enzyme';
import { Unwrapped as LandingUnwrapped } from '../Landing';

test('renders correctly', () => {
  const component = shallow(<LandingUnwrapped />);
  expect(component).toMatchSnapshot();
});
