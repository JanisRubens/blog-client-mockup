import * as types from 'actions/actionsTypes';

import AuthService from 'utilities/AuthService';
import axios from 'utilities/Axios';
import { history } from 'store'

//rewreite in ES6

export const loginProcessStart = () => {
    return {
        type: types.USER_LOGIN_START,
        payload: null
    }
}

export const loginProcessSuccessfull = (user) => {
    return {
        type: types.USER_LOGIN_SUCCESSFULL,
        payload: user
    }
}

export const loginProcessFailire = () => {

}

export const setUser = (userDetails) => {
    return {
        type: types.SET_USER,
        payload: userDetails
    }
}

export const login = (email, password) => {
    return ( async dispatch => {
        dispatch(loginProcessStart());
        const authResponse = await axios.post('/auth/login',{email: email, password: password}).catch(err=>console.log(err))
        AuthService.authenticateUser( authResponse.data.token );
        dispatch(loginProcessSuccessfull( authResponse.data.user ))
        history.replace('/admin')
	})

};