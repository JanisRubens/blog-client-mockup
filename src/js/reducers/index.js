import { combineReducers } from 'redux';
import postsReducer from 'reducers/postsReducer';
import { routerReducer } from 'react-router-redux';
import userReducer from 'reducers/userReducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	posts: postsReducer,
	user: userReducer
});

export default rootReducer;