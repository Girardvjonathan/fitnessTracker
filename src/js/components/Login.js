import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import { FontAwesome } from 'react-fontawesome';

export default class Login extends React.Component {

  constructor (props, context) {
    super(props, context);
    console.log("hi there im in logging");
  }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
  }

  render () {
    return (
      <div>
        <GoogleLogin socialId="239913616155-t8tjflfr4p9l6j98ik078883kubd8ptd.apps.googleusercontent.com"
                     class="google-login"
                     scope="profile"
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google">
                     <FontAwesome
      name='google'
    />
    <span> Login with Google</span>
  </GoogleLogin>
      </div>
    );
  }

}
