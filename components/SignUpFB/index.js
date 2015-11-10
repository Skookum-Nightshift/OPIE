/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Button from 'Button';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';

class SignUp extends React.Component {

    constructor() {
      super();

      this.state = {
        user: UserStore.getState().user
      }

      this.getProfileImage = this.getProfileImage.bind(this);
      this.loginToFacebook = this.loginToFacebook.bind(this);
      this.getProfile = this.getProfile.bind(this);
    }

    componentDidMount() {
        UserStore.listen((state) => {
          this.setState({ user: state.user });
        });
    }

    loginToFacebook() {

        Parse.FacebookUtils.logIn(null, {
            success: (user) => {
                if (!user.existed()) {

                    alert("User signed up and logged in through Facebook!");

                } else {

                    this.getProfile();

                }
            },
            error: (user, error) => {
                alert("User cancelled the Facebook login or did not fully authorize.");
            }
        });

    }

    getProfile() {
      FB.api("/me",  (response) => {
        UserActions.updateUser({ firstName: response.name.split(' ')[0], lastName: response.name.split(' ')[1] });
        this.getProfileImage();
      }); 
    }

    getProfileImage() {
      FB.api("/me/picture?width=180&height=180",  (response) => {
          var profileImage = response.data.url.split('https://')[1], //remove https to avoid any cert issues
            url = 'http://' + profileImage,
            user = this.state.user;

          user.profileImage = url;
          UserActions.updateUser(user);
      }); 
    }

    render(): ?ReactElement {
    return (
      <Button onClick={this.loginToFacebook} type='facebook'><i className="fa fa-facebook"></i></Button> 
    );
  }
}

export default SignUp;



