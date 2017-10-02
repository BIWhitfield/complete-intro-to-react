import React from 'react';
import { shallow } from 'enzyme';
import ShowCard from '../ShowCard';

test('renders correctly', () => {
  const component = shallow(<ShowCard />);
  expect(component).toMatchSnapshot();
});
