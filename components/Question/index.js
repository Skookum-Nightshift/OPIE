/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Question extends React.Component {


    render(): ?ReactElement {
    let { Order, Content, Answer1, Answer2, Answer3, Answer4 } = this.props.item;

    return (
        <div className="Question"> 
            <div className="question-block content">  
                <span className="question-circle"><div className="question-number">{Order}</div></span> 
                <p>{Content}</p>
            </div>
            <div className="answer-list content">  
                <ul>
                    <li><p>A: {Answer1}</p></li> 
                    <li><p>B: {Answer2}</p></li>
                    <li><p>C: {Answer3}</p></li> 
                    <li><p>D: {Answer4}</p></li>
                </ul>
            </div>
        </div>   
    );
  }
}

Question.propTypes = {
  // look up propTypes
  item: PropTypes.any.isRequired
};

export default Question;
