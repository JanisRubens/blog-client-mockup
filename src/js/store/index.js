import { applyMiddleware, createStore } from 'redux';

import { browserHistory } from 'react-router'
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import { syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

// import the root reducer


let store;
if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    store = applyMiddleware(logger, thunkMiddleware)(createStore)(rootReducer);
} else {
    store = applyMiddleware(thunkMiddleware)(createStore)(rootReducer);
}

export const history = syncHistoryWithStore(browserHistory, store);
export const dispatch = store.dispatch;

export default store;