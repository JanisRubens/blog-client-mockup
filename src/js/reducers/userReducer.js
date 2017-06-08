import * as types from '../actions/actionsTypes';

import { uniqBy } from 'lodash';

function userReducer(state = null, action) {
	switch(action.type) {
		case types.USER_LOGIN_SUCCESSFULL:
			return Object.assign({}, state, action.payload)
		case types.SET_USER:
			return Object.assign({}, state, action.payload)
		default:
			return state;
	}
};

export default userReducer
