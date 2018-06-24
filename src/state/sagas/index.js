import { takeEvery, call, put } from 'redux-saga/effects';
import { get } from 'axios';

import {
  SEARCH_ARTISTS_REQUEST,
  SEARCH_ARTISTS_REQUEST_SUCCESS,
  SEARCH_ARTISTS_REQUEST_FAILURE,
} from '../actionTypes/search';

import { searchRequestSuccess, searchRequestFailure } from '../actions/search';
import config from '../../config';

function* searchArtists(action) {
  const { searchTerm } = action;
  const uri = `${config.apiBase}${encodeURIComponent(searchTerm)}`;

  try {
    const data = yield call(() => get(uri));
    yield put(searchRequestSuccess({ data }));
  } catch (error) {
    yield put(searchRequestFailure({ error }));
  }
}

export default function* rootSaga() {
  yield takeEvery(SEARCH_ARTISTS_REQUEST, searchArtists);
}