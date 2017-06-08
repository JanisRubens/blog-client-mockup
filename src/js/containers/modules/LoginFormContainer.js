import React, {Component} from 'react';

import LoginForm from 'components/modules/LoginForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from 'actions/userActions';

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        user: state.user
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        login: login
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
