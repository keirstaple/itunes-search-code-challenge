import {
  SEARCH_ARTISTS_REQUEST,
  SEARCH_ARTISTS_REQUEST_SUCCESS,
  SEARCH_ARTISTS_REQUEST_FAILURE,
} from '../actionTypes/search';

export const searchRequest = ({ searchTerm }) => ({
  type: SEARCH_ARTISTS_REQUEST,
  searchTerm,
});

export const searchRequestSuccess = ({ data }) => ({
  type: SEARCH_ARTISTS_REQUEST_SUCCESS,
  data,
});

export const searchRequestFailure = ({ error }) => ({
  type: SEARCH_ARTISTS_REQUEST_FAILURE,
  error,
});
