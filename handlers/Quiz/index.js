/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Button from 'Button';
import RadialLoader from 'RadialLoader';
import AnswerGroup from 'AnswerGroup';

class Quiz extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Quiz">

        <p className="previous-button"><a href="/signup"><i className="fa fa-arrow-left"></i> Previous Questions </a> <br clear="all" /></p>
        <AnswerGroup />


            

                    
        <RouteHandler />
      </div>
    );
  }
}

export default Quiz;
