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
          status     : true,                                 // Check Facebook Login status
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
                    var currentUser = Parse.User.current();
                    // var test = JSON.stringify(currentUser);

                    // var userinfo = eval ("(" + test + ")");
                    // alert(test);
                    
                    if (currentUser) {
                        
                            alert("Welcome " + currentUser.name + ": Your UID is " + currentUser.id + " " + currentUser.firstName); 
                        
                    }

                }
            },
            error: function(user, error) {
                alert("User cancelled the Facebook login or did not fully authorize.");
            }
        });

    }

    getProfileImage() {
        var $photo = $('.photo'),
        $btn = $('.btn-fb'),
        $fbPhoto = $('img.fb-photo');
 
        //uploading
        $btn.text('Uploading...');
 
        FB.api("/me/picture?width=180&height=180",  function(response) {
     
            var profileImage = response.data.url.split('https://')[1], //remove https to avoid any cert issues
                randomNumber = Math.floor(Math.random()*256);
     
           //remove if there and add image element to dom to show without refresh
           if( $fbPhoto.length ){
               $fbPhoto.remove();
           }
             //add random number to reduce the frequency of cached images showing
           $photo.append('<img class=\"fb-photo img-polaroid\" src=\"http://' + profileImage + '?' + randomNumber + '\">');
            $btn.addClass('hide');

        }); 

        alert("User logged in through Facebook! and we got an image");
    }

    render(): ?ReactElement {
    return (
      <Button onClick={this.loginToFacebook} type='facebook'><i className="fa fa-facebook"></i></Button> 
    );
  }
}

export default SignUp;



