import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';

test('renders correctly', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
  expect(component).toMatchSnapshot();
});

test('should render correct amount of shows', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('should render correct amount of shows based on search terms', () => {
  const searchWord = 'black';
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />);
  // simulate the onChange event on the input in Search - find 'input' tag (can work with classNames too)
  // simulate 'change' with target and value of our search word. (e.target.value)

  // component.find('input').simulate('change', { target: { value: searchWord } });

  // logic from the search filter in the Search component gives us our shows
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
