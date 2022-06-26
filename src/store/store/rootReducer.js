import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {appReducer} from '../modules/app/reducer';

// 'modules/app/reducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const projectReducer = combineReducers({
  app: appReducer,
});

export const rootReducer = (state, action) => {
  // if (action.type === getType(resetStore)) {
  //    // state = undefined;
  //    const auth = state?.auth
  //       ? { ...state.auth, token: '', errors: {}, userID: null }
  //       : initialStateAuth;
  //    state = {
  //       app: initialStateApp,
  //    };
  // }
  return projectReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
