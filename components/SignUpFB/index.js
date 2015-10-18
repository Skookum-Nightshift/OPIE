/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Button from 'Button';

class SignUp extends React.Component {

    loginToFacebook() {

        // init the FB JS SDK
        Parse.FacebookUtils.init({
          appId      : '964785910226704',                        // App ID from the app dashboard
          // channelUrl : '//localhost.local/XXXXX/channel.html', // Channel file for x-domain comms
          status     : false,                                 // Check Facebook Login status
          xfbml      : true,                                  // Look for social plugins on the page
          logging    : true,
          version    : 'v2.5'
        });

        Parse.FacebookUtils.logIn(null, {
            success: function(user) {
                if (!user.existed()) {

                    alert("User signed up and logged in through Facebook!");

                } else {

                    alert("User logged in through Facebook!");

                }
            },
            error: function(user, error) {
                alert("User cancelled the Facebook login or did not fully authorize.");
            }
        });

    }


  render(): ?ReactElement {
    return (
      <div className="SignUp">
        <div className="col-6">
            <div className="signup-content">
                <h1> Create an Account </h1>
                <p>To start your PathSeer Quiz, create a free account and unlock exclusive resources</p>
            </div>
        </div>

        <div className="col-6"> 
            <div className="signup-content">  
                <div className="signup-form">
                    <input type="text" placeholder="Name" className="form-content"/><br/>
                    <input type="text" placeholder="Email" className="form-content"/><br/>
                    <Button type="indigo"> Continue </Button>
                </div>
                <p> or sign up using Facebook or Twitter </p>
                <Button onClick={this.loginToFacebook} type='facebook'><i className="fa fa-facebook"></i></Button> 
                <Button type='twitter'><i className="fa fa-twitter"></i></Button>
            </div>
            
        </div>    

            

                    
        <RouteHandler />
      </div>
    );
  }
}

export default SignUp;



