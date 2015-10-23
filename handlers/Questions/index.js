/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Button from 'Button';
import QuestionList from 'QuestionList';

class Questions extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Questions">
        <div className="col-6">
            <div className="content">
                <h1> Content Management </h1>
                <p>To start your PathSeer Quiz, create a free account and unlock exclusive resources</p>
            </div>
        </div>

        <div className="col-6"> 
            <div className="content">  
                <div className="question-form">

                    <input type="text" placeholder="Type Question" className="form-content"/><br/>
                    
                    <Button type="indigo" onClick={() => {this.context.router.transitionTo('Quiz');}}> <i className="fa fa-edit"></i> Add Question </Button>
                </div>
            </div>
        </div>    

        <QuestionList />

            

                    
        <RouteHandler />
      </div>
    );
  }
}

Questions.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Questions;
