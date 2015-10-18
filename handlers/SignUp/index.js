/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Button from 'Button';
import SignUpFB from 'SignUpFB';

class SignUp extends React.Component {
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
                    <Button type="indigo" onClick={() => {this.context.router.transitionTo('Quiz');}}> Continue </Button>
                </div>
                <p> or sign up using Facebook or Twitter </p>
                <SignUpFB />
                <Button type='twitter'><i className="fa fa-twitter"></i></Button>
            </div>
            
        </div>    

            

                    
        <RouteHandler />
      </div>
    );
  }
}

SignUp.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default SignUp;
