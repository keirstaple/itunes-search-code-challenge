import getProp from 'lodash/fp/get';
import {
  SEARCH_ARTISTS_REQUEST,
  SEARCH_ARTISTS_REQUEST_SUCCESS,
  SEARCH_ARTISTS_REQUEST_FAILURE,
} from '../actionTypes/search';

const getInitialState = () => ({
  searching: false,
});

const searchReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case SEARCH_ARTISTS_REQUEST:
      return { ...state, searching: true };
    case SEARCH_ARTISTS_REQUEST_SUCCESS:
      return { ...state, searching: false, data: getProp('data.data')(action) };
    case SEARCH_ARTISTS_REQUEST_FAILURE:
      return { ...state, searching: false, error: action.error };
    default:
      return state;
  }
}

export default searchReducer;