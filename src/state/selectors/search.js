import { createSelector } from 'reselect';
import getProp from 'lodash/fp/get';

const searchResultsSelector = state => getProp('search.data.results')(state);

export const albumResultsSelector = createSelector(
  searchResultsSelector,
  searchResults => {},
);
