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
        
            <RouteHandler />
        
      </div>
    );
  }
}

export default AppBase;
