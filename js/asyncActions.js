// @flow

import axios from 'axios';
import { addAPIData } from './actionCreators';

export default function getAPIDetails(imdbID: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(res => {
        dispatch(addAPIData(res.data));
      })
      .catch(err => {
        console.log('axios error', err); // eslint-disable-line no-console
      });
  };
}
