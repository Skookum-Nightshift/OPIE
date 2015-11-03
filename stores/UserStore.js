var alt = require('../alt');
var UserActions = require('../actions/UserActions');

import cookie from 'react-cookie';

class UserStore {
  constructor() {
    this.user = cookie.load('user');

    this.bindListeners({
      handleUpdateUser: UserActions.UPDATE_USER,
      handleDeleteUser: UserActions.DELETE_USER,
    });
  }

  handleUpdateUser(user) {
    this.user = user;
    cookie.save('user', user);
  }

  handleDeleteUser() {
    this.user = null;
    cookie.remove('user');
    FB.logout();
  }
}

module.exports = alt.createStore(UserStore, 'UserStore');
