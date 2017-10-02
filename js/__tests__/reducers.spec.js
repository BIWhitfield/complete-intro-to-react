import reducers from '../reducers';

test('SET_SEARCH_TERM', () => {
  const state = reducers({ searchTerm: '', apiData: {} }, { type: 'SET_SEARCH_TERM', payload: 'black' });
  expect(state).toEqual({ searchTerm: 'black', apiData: {} });
});

test('ADD_API_DATA', () => {
  const state = reducers(
    { searchTerm: '', apiData: {} },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '3.2',
        title: 'Westworld',
        year: '2016–',
        description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
        poster: 'ww.jpg',
        imdbID: 'tt0475784',
        trailer: 'eX3u0IlBBO4'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt0475784: {
        rating: '3.2',
        title: 'Westworld',
        year: '2016–',
        description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
        poster: 'ww.jpg',
        imdbID: 'tt0475784',
        trailer: 'eX3u0IlBBO4'
      }
    }
  });
});

test('ADD_API_DATA', () => {
  const state = reducers(
    {
      searchTerm: '',
      apiData: {
        tt0475784: {
          rating: '3.2',
          title: 'Westworld',
          year: '2016–',
          description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
          poster: 'ww.jpg',
          imdbID: 'tt0475784',
          trailer: 'eX3u0IlBBO4'
        },
        tt2085059: {
          rating: '8.7',
          title: 'Black Mirror',
          year: '2011–',
          description: 'A television anthology series that shows the dark side of life and technology.',
          poster: 'bm.jpg',
          imdbID: 'tt2085059',
          trailer: 'jDiYGjp5iFg'
        }
      }
    },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '4.6',
        title: 'Billions',
        year: '2016–',
        description: 'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
        poster: 'b.jpg',
        imdbID: 'tt4270492',
        trailer: '_raEUMLL-ZI'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt0475784: {
        rating: '3.2',
        title: 'Westworld',
        year: '2016–',
        description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
        poster: 'ww.jpg',
        imdbID: 'tt0475784',
        trailer: 'eX3u0IlBBO4'
      },
      tt2085059: {
        rating: '8.7',
        title: 'Black Mirror',
        year: '2011–',
        description: 'A television anthology series that shows the dark side of life and technology.',
        poster: 'bm.jpg',
        imdbID: 'tt2085059',
        trailer: 'jDiYGjp5iFg'
      },
      tt4270492: {
        rating: '4.6',
        title: 'Billions',
        year: '2016–',
        description: 'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
        poster: 'b.jpg',
        imdbID: 'tt4270492',
        trailer: '_raEUMLL-ZI'
      }
    }
  });
});
