import { createStore, applyMiddleware, Middleware } from 'redux';

import { composeEnhancers } from './utils';
import rootReducer from './rootReducer';

const middlewares: Middleware[] = [];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, {}, enhancer);


export default store;
