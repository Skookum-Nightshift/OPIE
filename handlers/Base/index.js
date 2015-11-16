/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import Avatar from 'Avatar';
import Account from 'Account';

class AppBase extends React.Component {

    constructor() {
        super();
        this.state = { 
          showAccountModal: false,
          user: UserStore.getState().user 
        };
        this.toggleAccountSettings = this.toggleAccountSettings.bind(this);
    }

    toggleAccountSettings() {
        this.setState({ showAccountModal: !this.state.showAccountModal });
    }

    /*life cycle event*/
    componentDidMount() {
        UserStore.listen((state) => {
          this.setState({ user: state.user });
        });
    }

    render(): ?ReactElement {
    var {showAccountModal, user, showAccountModal} = this.state;
    return (
      <div>
       { user ? <Account open={showAccountModal} onClick={this.toggleAccountSettings} user={user} /> : '' }
        <div className="header">
          <div className="container">
            <div className="main-logo"><a href="/"><img src="./public/img/logo.png" /></a></div>
            
            { user ? <Avatar user={user} onClick={this.toggleAccountSettings} open={showAccountModal} />  : '' }
          </div>
        </div>
        <div className="AppBase">
            <RouteHandler />
        </div>
      </div>
    );
  }
}

export default AppBase;
