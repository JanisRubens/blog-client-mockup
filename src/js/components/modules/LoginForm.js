import React from 'react';
import {login} from 'actions/userActions'

class LoginForm extends React.Component {

    _handleSubmit(e) {
        e.preventDefault()
        this.props.login(this.refs.email.value, this.refs.password.value)
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <label>
                    email:
                    <input type="email" placeholder="email" ref="email"/>
                </label>
                <label>
                    password:
                    <input type="password" placeholder="password" ref="password"/>
                </label>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}
export default LoginForm;