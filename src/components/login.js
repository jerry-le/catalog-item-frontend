import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {requestLogin} from "../actions";
import {connect} from 'react-redux';

class Login extends Component {
    responseGoogle(response) {
        this.props.requestLogin(response,
            (data) => {
                // if login success
                console.log(data);
            },
            (reason) => {
                // if login fail
                console.log(reason);
            });
    }

    render() {
        return (
            <div>
                <h3>Login</h3>

                <GoogleLogin
                    buttonText="Login with Google"
                    scope="openid email"
                    clientId="388668170175-l9sn7r2t54apln8d000q68eeqbrgopfg.apps.googleusercontent.com"
                    redirectUri="postmessage"
                    prompt="consent"
                    onSuccess={this.responseGoogle.bind(this)}
                    onFailure={this.responseGoogle.bind(this)}
                />
            </div>
        )
    }
}

export default connect(null, {requestLogin})(Login);