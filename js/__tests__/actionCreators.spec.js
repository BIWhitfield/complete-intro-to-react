// @flow

import moxios from 'moxios';
import { setSearchTerm, addAPIData } from '../actionCreators';
import getAPIDetails from '../asyncActions';

const Atlanta = {
  title: 'Atlanta',
  year: '2008–2013',
  description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
  poster: 'a.jpg',
  imdbID: 'tt4288182',
  trailer: 'MpEdJ-mmTlY',
  rating: '8.6'
};

// test action creators with snapshots
test('setSearchTerm', () => {
  expect(setSearchTerm('black')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(addAPIData(Atlanta)).toMatchSnapshot();
});

test('getAPIDetails', (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getAPIDetails(Atlanta.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: Atlanta
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${Atlanta.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addAPIData(Atlanta));
          done();
        });
    });
  });
});
