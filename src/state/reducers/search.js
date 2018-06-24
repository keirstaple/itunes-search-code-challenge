import { SEARCH_ARTISTS_REQUEST } from '../actionTypes/search';

const getInitialState = () => ({
  searching: false,
});

const searchReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case SEARCH_ARTISTS_REQUEST:
      return { ...state, searching: true };
    default:
      return state;
  }
}

export default searchReducer;