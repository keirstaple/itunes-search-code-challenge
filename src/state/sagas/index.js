import { takeEvery } from 'redux-saga/effects'

import { SEARCH_ARTISTS_REQUEST } from '../actionTypes/search';

function* searchArtists(action) { }

// use them in parallel
export default function* rootSaga() {
  yield takeEvery(SEARCH_ARTISTS_REQUEST, searchArtists);
}