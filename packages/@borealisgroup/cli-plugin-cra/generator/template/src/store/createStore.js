import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { ENV } from 'config/env.config';
import rootReducer from './rootReducer';

// Middlewares
const middlewares = [thunk];

if (ENV.dev) {
  import('./createStore.development').then(({ addDevMiddlewares }) =>
    addDevMiddlewares(middlewares)
  );
}

// Enhancers
const enhancers = [];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(rootReducer, composedEnhancers);

export default store;
