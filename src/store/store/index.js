import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

const {dispatch, getState} = store;
// const persistor = storage(store);

export {dispatch, getState};
export default store;
