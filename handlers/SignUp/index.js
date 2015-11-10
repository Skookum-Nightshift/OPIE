/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Button from 'Button';
import SignUpFB from 'SignUpFB';
import UserStore from '../../stores/UserStore';

class SignUp extends React.Component {
constructor() {
        super();
        this.state = { user: UserStore.getState().user };
  }

  componentDidMount() {
        if (this.state.user) { 
            this.context.router.transitionTo("home");
        }
        UserStore.listen((state) => {
          this.setState({ user: state.user });
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
                <div className="signup-form hidden">
                    <input type="text" placeholder="Name" className="form-content"/><br/>
                    <input type="text" placeholder="Email" className="form-content"/><br/>       
                </div>

                <Button type="indigo" onClick={() => {this.context.router.transitionTo('Quiz');}}> Continue </Button>
                <p> or sign up using Facebook to track your stats</p>
                
                <SignUpFB />
                
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
