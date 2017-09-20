import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(<Search shows={preload.shows} />);
    expect(component).toMatchSnapshot();
  });

  it('should render correct amount of shows', () => {
    const component = shallow(<Search shows={preload.shows} />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('should render correct amount of shows based on search terms', () => {
    const component = shallow(<Search shows={preload.shows} />);
    const searchWord = 'black';
    // simulate the onChange event on the input in Search - find 'input' tag (can work with classNames too)
    // simulate 'change' with target and value of our search word. (e.target.value)
    component.find('input').simulate('change', { target: { value: searchWord } });
    // logic from the search filter in the Search component gives us our shows
    const showCount = preload.shows.filter(
      show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
    ).length;
    expect(component.find(ShowCard).length).toEqual(showCount);
  });
});
