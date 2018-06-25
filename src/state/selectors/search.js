import { createSelector } from 'reselect';
import flow from 'lodash/fp/flow';
import getProp from 'lodash/fp/get';
import groupBy from 'lodash/fp/groupBy';
import filter from 'lodash/fp/filter';
import has from 'lodash/fp/has';

export const searchErrorSelector = state => getProp('search.error')(state);
const searchResultsSelector = state => getProp('search.data.results')(state);

const targetPath = 'collectionName';
export const albumResultsSelector = createSelector(
  searchResultsSelector,
  searchResults => flow(
    filter((object) => has(targetPath)(object)),
    groupBy(targetPath),
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
