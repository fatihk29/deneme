import {call, put, takeLatest} from 'redux-saga/effects';
import {
  searchUsersAction,
  getEpisodeDetailAction,
  getAllCharactersAction,
} from './actions';
import {App} from '../../services';
import {createAction} from 'deox';

function* searchUsersSaga({payload}) {
  try {
    const {data} = yield call(App.searchUsers, payload.data);
    payload.onSuccess && payload.onSuccess(data);
    yield put(searchUsersAction.success(data));
  } catch (error) {
    yield put(searchUsersAction.fail());
  }
}

function* EpisodeDetailSaga({payload}) {
  try {
    const {data} = yield call(App.getEpisodeDetail, payload);
    payload.onSuccess && payload.onSuccess(data);
    yield put(getEpisodeDetailAction.success(data));
  } catch (error) {
    yield put(getEpisodeDetailAction.fail());
  }
}
function* AllCharactersSaga({payload}) {
  try {
    const {data} = yield call(App.getAllCharacterDetail, payload);
    payload.onSuccess && payload.onSuccess(data);
    yield put(getAllCharactersAction.success(data));
  } catch (error) {
    yield put(getAllCharactersAction.fail());
  }
}

export const setErrors = createAction(
  'errors/SET_ERROR',
  resolve => payload => resolve(payload),
);

export const resetErrors = createAction('errors/RESET_ERRORS');

export default function* watchApp() {
  yield takeLatest(searchUsersAction.request, searchUsersSaga);
  yield takeLatest(getEpisodeDetailAction.request, EpisodeDetailSaga);
  yield takeLatest(getAllCharactersAction.request, AllCharactersSaga);
}
