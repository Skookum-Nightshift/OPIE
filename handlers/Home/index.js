import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';

require('./styles.css');

class Home extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Home">
        
        
        <p className="home-content">Explore career paths that suits your interests using our interactive quiz. 
        Use your results to connect with professional mentors and begin planning your future!</p>
        <Button type="white" onClick={() => {this.context.router.transitionTo('SignUp');}}> Get Started </Button>
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
