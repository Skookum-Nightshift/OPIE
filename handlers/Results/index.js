import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';

require('./styles.css');

class Results extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Results">
      <div className="SideNavigation__wrapper container">
        <div className="SideNavigation__buttons">
          <Button type="navi">Resources</Button>
          <Button type="navi">Retake?</Button>
          <Button type="navi">Mentor</Button>  
        </div>
        <div className="ShareResults__desktop">
            <p>Share Results</p>
            <div className="ShareResults__facebook"><i className="fa fa-facebook"></i></div>
            <div className="ShareResults__twitter"><i className="fa fa-twitter"></i></div>
        </div>
      </div>

      <div className="Results__image"></div>
      <div className="Results__wrapper">
        <div className="container">
          <h1>Career Category</h1>
          <h4>This is where your tagline goes</h4>
          <p className="results-content col-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, ante in rutrum posuere, 
          tortor ipsum semper tortor, non rhoncus sem eros ut nisl. Nunc et aliquet lacus, ac congue neque. Vestibulum diam augue, iaculis 
          quis egestas cursus, iaculis a est. Pellentesque id commodo lorem. Cras nec vestibulum tellus. Nunc congue sapien nec venenatis 
          consectetur. Ut a nunc id massa dignissim elementum at at felis.<br/><br/>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, ante in rutrum posuere, 
          tortor ipsum semper tortor, non rhoncus sem eros ut nisl. Nunc et aliquet lacus, ac congue neque. Vestibulum diam augue, iaculis 
          quis egestas cursus, iaculis a est. Pellentesque id commodo lorem. Cras nec vestibulum tellus. Nunc congue sapien nec venenatis 
          consectetur. Ut a nunc id massa dignissim elementum at at felis.</p>
        </div>
      </div>

      <div className="SideNavigation__wrapper-mobile mobile">
        <div className="SideNavigation__buttons-mobile">
          <Button type="navi">Resources</Button>
          <Button type="navi">Retake?</Button>
          <Button type="navi">Mentor</Button>  
        </div>
      </div>


      </div>
    );
  }
}

Results.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Results.displayName = 'Results';

Results.contextTypes = {
    router: React.PropTypes.func.isRequired
};
export default Results;
