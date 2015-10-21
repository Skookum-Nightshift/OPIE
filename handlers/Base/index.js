/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';

class AppBase extends React.Component {
    /*life cycle event*/
    componentDidMount() {
        Parse.initialize("3Du0HF5jjvlb1bxyV53wf7P5uB58vBgvMrVMwwiz", "wytQ56mFhsRpXnGMxQIVkDbkcDQYpuXAQW4CuAsL");
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
