/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Button from 'Button';
import QuestionList from 'QuestionList';
import Input from 'Input';

class Questions extends React.Component {

    constructor() {
        super();
        this.state = {
            showAddQuestionForm: false,
            lastOrder: 0,
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            question: "",
            items: []
        };

        this.toggleAddQuestionForm = this.toggleAddQuestionForm.bind(this);
        this.updateState = this.updateState.bind(this);
        this.saveQuestion = this.saveQuestion.bind(this);
        this.clearQuestionFields = this.clearQuestionFields.bind(this);
        this.getQuestions = this.getQuestions.bind(this);
        this.handleDeleted = this.handleDeleted.bind(this);
    }

    componentDidMount() {
        // function called after render
        this.getQuestions();
    }

     handleDeleted(index) {
        var {items} = this.state;
        items.splice(index, 1);
        this.setState({ items });
    }

    toggleAddQuestionForm() {
        this.setState({ showAddQuestionForm: !this.state.showAddQuestionForm });
    }

    updateState(name, value) {
        var state = {};
        state[name] = value;
        this.setState(state);
    }
    clearQuestionFields() {
        this.setState({ question: '', answer1: '', answer2: '', answer3: '', answer4: '',showAddQuestionForm: false });
    }

    getQuestions() {
        var QuestionListItem = Parse.Object.extend("Question");
        var query = new Parse.Query(QuestionListItem);
        query.find({
            success: (results) => { // arrow functions
                var items = results.map(result => result.attributes ).sort((itemA, itemB) => {
                    return itemA.Order - itemB.Order;
                });
                this.setState({ items, lastOrder: items[items.length-1].Order });
            }, 
            error: function(error) {
                alert("Query Error: " + error.message);
            }
        });
    }

    saveQuestion() {
        let { question, answer1, answer2, answer3, answer4 } = this.state;
        var Question = Parse.Object.extend("Question");
        var newQuestion = new Question();

        newQuestion.set("Content", question);
        newQuestion.set("Answer1", answer1);
        newQuestion.set("Answer2", answer2);
        newQuestion.set("Answer3", answer3);
        newQuestion.set("Answer4", answer4);
        newQuestion.set("Order", this.state.lastOrder + 1);

        newQuestion.save(null, {
          success: (newQuestion) => {
            // resetting the field
            this.clearQuestionFields();
            this.getQuestions();

          },
          error: function(newQuestion, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
          }
        });
    }

    render(): ?ReactElement {
    return (
      <div className="Questions">
        <div className="col-12">
            <div className="content">
                <h1> Content Management </h1>
                <p className="CMS-description">This management system is where you add / delete questions.</p>
                <Button type="indigo-tab" onClick={this.toggleAddQuestionForm}> 
                    
                    { this.state.showAddQuestionForm ?
                        <div><i className="fa fa-close"></i> Cancel</div>
                        : <div><i className="fa fa-edit"></i> Add Question</div>
                    }
                </Button>

                { this.state.showAddQuestionForm ? 
                    <Button type="indigo-tab" onClick={this.saveQuestion}><i className="fa fa-check-circle"></i> Save New Question </Button> : ""
                }

                { this.state.showAddQuestionForm ? (    
                    <div className="question-tab">  
                        <div className="question-form">
                            <Input type="text" placeholder="Type Question" value={this.state.question} name="question" onInputChange={this.updateState} />
                            <Input type="text" placeholder="Type Answer 1:" defaultValue={this.state.answer1} name="answer1" onInputChange={this.updateState} />
                            <Input type="text" placeholder="Type Answer 2:" defaultValue={this.state.answer2} name="answer2" onInputChange={this.updateState} />
                            <Input type="text" placeholder="Type Answer 3:" defaultValue={this.state.answer3} name="answer3" onInputChange={this.updateState} />
                            <Input type="text" placeholder="Type Answer 4:" defaultValue={this.state.answer4} name="answer4" onInputChange={this.updateState} />                    
                        </div>
                    </div>
                ) : '' }  
            </div>
        </div>

        <QuestionList items={this.state.items} itemDeleted={this.handleDeleted} />
                    
        <RouteHandler />
      </div>
    );
  }
}

Questions.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Questions;
