import * as types from './actionsTypes';

import axios from 'utilities/Axios';
import postStub from '../stubs/posts';

//rewreite in ES6

function fetchDataStart() {
	return {
        type: types.FETCH_START,
        payload: true
    }
};

function fetchPostsSuccess(posts) {
	return{
		type: types.FETCH_SUCCESS,
		payload: posts
	}
};

function fetchPostsFailure(error) {
	return {
		type: types.FETCH_ERROR,
		payload: error
	}
};


export function getInitialPosts(replace, next) {
	return ( (dispatch ) => {
        axios.get('/api/public/post')
		.then( res => { 
			dispatch(fetchPostsSuccess(res.data.posts))
			next()
		})
		.catch( err => dispatch(fetchPostsFailure()))
    })
};


//initial load action
//we pass additional replace, next functions from react router onEnter function, to transition only when fetch is done

export const getInitialPostByID = ( postID, replace, next ) => {
	return ( (dispatch ) => {
        axios.get(`/api/public/post/${postID}`)
		.then( res => { 
			dispatch(fetchSinglePostSuccess(res.data.post))
			next()
		})
		.catch( err => dispatch(fetchPostsFailure()))
    })
}

export const fetchSinglePostSuccess = ( post ) => {
	return {
		type: types.FETCH_SINGLE_POST_SUCCESS,
		payload: post
	}
}
