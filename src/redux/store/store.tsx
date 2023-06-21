import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const logger = require('redux-logger').default;
middleware.push(logger);

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
});

export default store;

sagaMiddleware.run(rootSaga);
