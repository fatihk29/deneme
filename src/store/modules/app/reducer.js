import {createReducer} from 'deox';
import {produce} from 'immer';
import {
  searchUsersAction,
  getEpisodeDetailAction,
  getAllCharactersAction,
} from './actions';

export const initialStateApp = {
  loading: false,
  errors: {},
  loadingContact: false,
  generalError: null,
  searchUser: {},
  episodeDetail: {},
  allCharacters: [],
};

export const appReducer = createReducer(initialStateApp, handleAction => [
  // searchUsersAction
  handleAction(searchUsersAction.request, state =>
    produce(state, draft => {
      // draft.searchUser = {};
      draft.loadingContact = true;
      draft.errors = {};
    }),
  ),
  handleAction(searchUsersAction.success, (state, {payload}) => {
    return produce(state, draft => {
      draft.searchUser = payload;
      draft.loadingContact = false;
      draft.errors = {};
    });
  }),
  handleAction(searchUsersAction.fail, (state, {payload}) =>
    produce(state, draft => {
      draft.loadingContact = false;
      draft.errors = payload;
    }),
  ),

  // searchUsersAction
  handleAction(getEpisodeDetailAction.request, state =>
    produce(state, draft => {
      draft.episodeDetail = {};
      draft.loadingContact = true;
      draft.errors = {};
    }),
  ),
  handleAction(getEpisodeDetailAction.success, (state, {payload}) => {
    return produce(state, draft => {
      draft.episodeDetail = payload;
      draft.loadingContact = false;
      draft.errors = {};
    });
  }),
  handleAction(getEpisodeDetailAction.fail, (state, {payload}) =>
    produce(state, draft => {
      draft.loadingContact = false;
      draft.errors = payload;
    }),
  ),

  // AllCharactersAction
  handleAction(getAllCharactersAction.request, state =>
    produce(state, draft => {
      draft.allCharacters = [];
      draft.loadingContact = true;
      draft.errors = {};
    }),
  ),
  handleAction(getAllCharactersAction.success, (state, {payload}) => {
    return produce(state, draft => {
      draft.allCharacters = payload;
      draft.loadingContact = false;
      draft.errors = {};
    });
  }),
  handleAction(getAllCharactersAction.fail, (state, {payload}) =>
    produce(state, draft => {
      draft.loadingContact = false;
      draft.errors = payload;
    }),
  ),
]);
