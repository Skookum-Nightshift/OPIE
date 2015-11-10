import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import UserStore from '../../stores/UserStore';

require('./styles.css');

class Home extends React.Component {
  constructor() {
        super();
        this.state = { user: UserStore.getState().user };
  }

  componentDidMount() {
      
        UserStore.listen((state) => {
          this.setState({ user: state.user });
        });
    }

  render(): ?ReactElement {
    return (
      <div className="Home">
        <div className="Home-container">
            <h1> Welcome to Pathseer </h1>
            <p className="home-content">Explore career paths that suits your interests using our <strong>interactive quiz</strong>. 
            Use your results to connect with professional mentors and begin planning your future!</p>

            <div className="Home-login">
                <div className="Home-login-btn" 
                  onClick={() => {
                    this.context.router.transitionTo("Quiz");
                  }}  
                >
                    <span> Try Now </span>
                </div>

                <div className="Home-login-btn"
                onClick={() => {
                    var {router} = this.context;
                    this.state.user ? router.transitionTo("Quiz") : router.transitionTo('SignUp');
                  }}
                >
                  <span> Register </span>
                </div>
            </div>

        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
    
};

Home.displayName = 'Home';

Home.contextTypes = {
    router: React.PropTypes.func.isRequired
};
export default Home;
