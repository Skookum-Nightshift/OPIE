/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import Avatar from 'Avatar';

class AppBase extends React.Component {

    constructor() {
        super();
        this.state = { user: UserStore.getState().user };
    }

    /*life cycle event*/
    componentDidMount() {
        UserStore.listen((state) => {
          this.setState({ user: state.user });
        });
    }

    render(): ?ReactElement {
    
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="main-logo"><a href="/"><img src="./public/img/logo.png" /></a></div>
            { this.state.user ?  <Avatar user={this.state.user}/> : '' }
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
