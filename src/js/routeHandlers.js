import { getInitialPostByID, getInitialPosts } from 'actions/postActions';

import AuthService from 'utilities/AuthService';
import axios from 'utilities/Axios'
import { dispatch } from 'store';
import jwt_decode from 'jwt-decode';
import { setUser } from 'actions/userActions';

/*
  Write preload functions here for route enters.

  This way i can avoid stupid spinners and there is no need for a server render.
*/


export const onEnterHome = (nextState, replace, next) => {
    dispatch(getInitialPosts(replace, next))
}

export const onEnterPost = (nextState, replace, next) => {
  const postID = nextState.params.postID;
  dispatch(getInitialPostByID(postID, replace, next))
}

export const verifyAuthentication = (nextState, replace, next) => {
  //YES YOU CAN HACK THIS. But the view is all you will get #hackerboy
  const token = AuthService.getToken()
  const decoded = token ? jwt_decode(token) : null
  if (!token || !(decoded.scope.indexOf('ADMIN') > -1) ) {
    replace("/login")
  }
  dispatch(setUser(decoded))
  next()
}

