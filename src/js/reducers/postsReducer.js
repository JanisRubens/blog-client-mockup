import * as types from '../actions/actionsTypes';

import { uniqBy } from 'lodash';

function postsReducer(state = [], action) {
	switch(action.type) {
		case types.FETCH_SUCCESS:
			return [...uniqBy([...state, ...action.payload], '_id')]
		case types.FETCH_START:
			return state
		case types.FETCH_SINGLE_POST_SUCCESS:
			console.log(action)
			return [...action.payload]
		default:
			return state;
	}
};

export default postsReducer
