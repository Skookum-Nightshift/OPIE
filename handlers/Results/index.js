import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';

require('./styles.css');

class Results extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Results">
        <img src="/public/img/sample-circle-photo.png" className="img-resize" />
        <h1>Career Category</h1>
        <h4>This is where your tagline goes</h4>

        <div className="Results-content">
        <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, ante rutrum posuere, tortor ipsum semper tortor, non rhoncus sem eros ut nisl. Nunc et aliquet lacus, ac congue neque. Vestibulum diam augue, iaculis quis egestas cursus, iaculis a est. Pellentesque id commodo lorem. Cras nec vestibulum tellus. Nunc congue sapien nec venenatis consectetur. Ut a nunc id massa dignissim elementum at at felis.</p>
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
