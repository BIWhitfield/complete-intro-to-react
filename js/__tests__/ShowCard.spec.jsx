import React from 'react';
import { shallow } from 'enzyme';
import ShowCard from '../ShowCard';

describe('ShowCard', () => {
  it('renders correctly', () => {
    const component = shallow(<ShowCard />);
    expect(component).toMatchSnapshot();
  });
});
