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
        <h1> Welcome to Pathseer </h1>
        
        <p className="home-content">Explore career paths that suits your interests using our interactive quiz. 
        Use your results to connect with professional mentors and begin planning your future!</p>
        <Button type="white" onClick={() => {
          var {router} = this.context;
          this.state.user ? router.transitionTo("Quiz") : router.transitionTo('SignUp');
        }}> Get Started </Button>
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
