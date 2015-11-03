/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Avatar extends React.Component {
    constructor() {
        super();
        this.state = { 
            showSettings: false
        };
        this.toggleSettings = this.toggleSettings.bind(this);
    }

    toggleSettings() {
        this.setState({ showSettings: !this.state.showSettings });
    }

    render(): ?ReactElement {
    var {user} = this.props;
    return (
        <div className="Avatar" onMouseEnter={this.toggleSettings} onMouseLeave={this.toggleSettings}>
            <img src={user.profileImage} />
            <div className="Avatar__name">
                { this.state.showSettings ? (<span>Account Settings</span>) : (<span>Hello {user.firstName}! <i className="fa fa-cog"></i></span>) }
            </div>
        </div>
    );
  }
}

Avatar.propTypes = {

};

Avatar.defaultProps = {
 
};

export default Avatar;
