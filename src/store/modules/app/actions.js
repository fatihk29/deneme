import {createAction} from 'deox';

export const searchUsersAction = {
  request: createAction(
    'app/SEARCH_USERS',
    resolve => payload => resolve(payload),
  ),
  success: createAction('app/SEARCH_USERS_SUCCESS', resolve => payload => {
    return resolve(payload);
  }),
  fail: createAction(
    'app/SEARCH_USERS_FAIL',
    resolve => error => resolve(error),
  ),
};

export const getEpisodeDetailAction = {
  request: createAction('app/GET_EPISODE_DETAIL', resolve => payload => {
    return resolve(payload);
  }),
  success: createAction(
    'app/GET_EPISODE_DETAIL_SUCCESS',
    resolve => payload => {
      return resolve(payload);
    },
  ),
  fail: createAction(
    'app/GET_EPISODE_DETAIL_FAIL',
    resolve => error => resolve(error),
  ),
};

export const getAllCharactersAction = {
  request: createAction('app/GET_ALL_CHARACTERS', resolve => payload => {
    return resolve(payload);
  }),
  success: createAction(
    'app/GET_ALL_CHARACTERS_SUCCESS',
    resolve => payload => {
      return resolve(payload);
    },
  ),
  fail: createAction(
    'app/GET_ALL_CHARACTERS_DETAIL_FAIL',
    resolve => error => resolve(error),
  ),
};
