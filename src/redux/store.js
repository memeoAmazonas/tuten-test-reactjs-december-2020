import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(reducer, applyMiddleware(sagaMiddleware, thunk, logger)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
