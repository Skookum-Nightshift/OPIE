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
        

        <p className="previous-button"><a href="/signup" onClick={() => {this.context.router.transitionTo('SignUp');}}><i className="fa fa-arrow-left"></i> Previous Question </a> 
            <span className="current-question"> Current Question </span>
        </p>
        
        <br clear="all" />
        <AnswerGroup />


            

        <RadialLoader progress="50"/>            
        <RouteHandler />
      </div>
    );
  }
}

Quiz.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Quiz;
