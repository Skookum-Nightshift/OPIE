/** @flow */

require('./styles.css');

import React from 'react';
import Button from 'Button';
import UserActions from '../../actions/UserActions';

var {PropTypes} = React;

class Account extends React.Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }
    logout() {
        UserActions.deleteUser();
        this.context.router.transitionTo("home");
    }

    render(): ?ReactElement {
    let {user, onClick, open} = this.props;
    let className = ( open ? "Account animated fadeIn" : "Account hidden" );
    return (
        <div className={className}>
            <div className="container">
                <div className="closeButton" onClick={onClick}> <i className="fa fa-arrow-left fa-2x"></i></div>
                <h1>USER ACCOUNT SETTINGS</h1>
                <div className="accountContent">
                    <div className="Avatar__image">
                        <img src={user.profileImage} />
                    </div>
                    <div className="accountContent__rightPanel">
                    
                        <div className="userFullName">
                            <h2>{user.firstName} {user.lastName}</h2>
                            <p><span><i className="fa fa-facebook-official fa-lg"></i> @chizzau</span></p>
                            <p><span><i className="fa fa-envelope fa-lg"></i> hello@chau.in</span></p>
                            <p><span><i className="fa fa-university fa-lg"></i> Education Level: SCHOOL OF HARD KNOCKS </span></p>
                            <p><span><i className="fa fa-heartbeat fa-lg"></i> AGE: FOREVER YOUNG </span></p>
                            <p><span><i className="fa fa-user fa-lg"></i> BIRTHDAY: Decemeber 25 </span></p>
                            <p className="user-logout"><span onClick={this.logout}><i className="fa fa-power-off fa-lg"></i> Logout </span></p>

                            <div className="editButtonGroup">
                                <Button type="indigo"><i className="fa fa-cloud-upload fa-lg"></i> Upload Profile Image</Button>
                                <Button type="indigo"><i className="fa fa-pencil-square-o fa-lg"></i> Edit Basic Information</Button>
                                <Button type="indigo"><i className="fa fa-area-chart fa-lg"></i> See Your Analytics</Button>
                            </div>
                            <h2>Quizzes Taken & Answers</h2>


                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
  }
}

Account.propTypes = {

};

Account.defaultProps = {
 
};

Account.contextTypes = {
    router: React.PropTypes.any.isRequired
};
export default Account;
