/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Button from 'Button';
import RadialLoader from 'RadialLoader';

class Quiz extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Quiz">

        <p className="previous-button"><a href="/signup"><i className="fa fa-arrow-left"></i> Previous Questions </a> <br clear="all" /></p>
        <div className="col-6">
            <div className="quiz-content">
            <div className="quiz-button qb-1">
                <p>Answer</p>
            </div></div>
        </div>

        <div className="col-6"> 
            <div className="quiz-content">
            <div className="quiz-button qb-2">
                <p>Answer</p> 
            </div></div>
        </div>    
        <div className="col-6">
            <div className="quiz-content">
            <div className="quiz-button qb-3">
                <p>Answer</p>
            </div></div>
        </div>

        <div className="col-6"> 
            <div className="quiz-content">
            <div className="quiz-button qb-4">
                <p>Answer</p> 
                <RadialLoader progress="50" />
            </div></div>
        </div>  

            

                    
        <RouteHandler />
      </div>
    );
  }
}

export default Quiz;
