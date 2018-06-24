import { createSelector } from 'reselect';
import flow from 'lodash/fp/flow';
import getProp from 'lodash/fp/get';
import groupBy from 'lodash/fp/groupBy';
import omit from 'lodash/fp/omit';

const searchResultsSelector = state => getProp('search.data.results')(state);

export const albumResultsSelector = createSelector(
  searchResultsSelector,
  searchResults => flow(
    groupBy('collectionName'),
    omit('undefined'),
    (groupedResults) => {
      const results = [];
      for (const prop in groupedResults) {
        results.push({
          title: prop,
          collection: groupedResults[prop],
        });
      };
      return results;
    },
  )(searchResults),
);
