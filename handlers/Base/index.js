/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';

class AppBase extends React.Component {
    /*life cycle event*/
    componentDidMount() {
        
    }

    render(): ?ReactElement {
    
    return (
      <div className="AppBase">
        <div className="main-logo"><a href="/"><img src="./public/img/logo.png" /></a></div>
        
            <RouteHandler />
        
      </div>
    );
  }
}

export default AppBase;
