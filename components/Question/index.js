/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            showAnswers: false,
            showDeleteButton: false,
        };

        this.toggleAnswers = this.toggleAnswers.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
    }

    toggleAnswers() {
        this.setState({ showAnswers: !this.state.showAnswers });
    }

    toggleDelete() {
        this.setState({ showDeleteButton: !this.state.showDeleteButton });
    }

    deleteQuestion(e) {
        e.stopPropagation(); // prevents events from event bubbling
        // TODO: delete item in  parse
        this.props.itemDeleted(this.props.index);
    }


    render(): ?ReactElement {
    let { Order, Content, Answer1, Answer2, Answer3, Answer4 } = this.props.item;

    return (
        <div className="Question" onClick={this.toggleAnswers} onMouseEnter={this.toggleDelete} onMouseLeave={this.toggleDelete}> 
            <div className="question-block content">  
                <span className="question-circle"><div className="question-number">{Order}</div></span> 
                { this.state.showDeleteButton ? <span className="deleteQuestion" onClick={this.deleteQuestion}><i className="fa fa-close fa-2x"></i></span> : ''}
                <p>{Content}</p>

            </div>
            { this.state.showAnswers ? (
            <div className="answer-list content animated fadeIn">  
                <ul>
                    <li><p>A: {Answer1}</p></li> 
                    <li><p>B: {Answer2}</p></li>
                    <li><p>C: {Answer3}</p></li> 
                    <li><p>D: {Answer4}</p></li>
                </ul>
            </div>
            ) : '' }
        </div>   
    );
  }
}

Question.propTypes = {
  // look up propTypes
  item: PropTypes.any.isRequired
};

export default Question;
