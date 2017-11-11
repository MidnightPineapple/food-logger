import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(
    loggerMiddleware,
    thunkMiddleware,
  ))
  return createStore(reducer, initialState, enhancer)
}

export default configureStore({})
