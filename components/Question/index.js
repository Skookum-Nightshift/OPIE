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
                <span><div className="question-number">{Order}</div></span> 
                <p>{Content}</p>
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
