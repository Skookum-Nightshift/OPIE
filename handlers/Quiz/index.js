/** @flow */
'use strict';

require('./styles.css');

import React from 'react/addons';
import {RouteHandler} from 'react-router';
import Button from 'Button';
import RadialLoader from 'RadialLoader';
import AnswerGroup from 'AnswerGroup';
let ReactTransition = React.addons.CSSTransitionGroup;

class Quiz extends React.Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      currentIndex: 0,
      selectedAnswers: []
    }

    this.getQuestions = this.getQuestions.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.saveSelectedAnswers = this.saveSelectedAnswers.bind(this);
    this.getPreviousQuestion = this.getPreviousQuestion.bind(this);
    this.restartQuiz = this.restartQuiz.bind(this);
  }

  saveSelectedAnswers() {
    let { selectedAnswers } = this.state;
    var selectAnswer = Parse.Object.extend("SelectedAnswers");
    var newSelectAnswer = new selectAnswer();
    var user = Parse.User.current();
    console.log(user);
    newSelectAnswer.set("user", user );
    newSelectAnswer.set("selectedAnswers", selectedAnswers); 

    newSelectAnswer.save(null, {
      success: (newSelectAnswer) => {
        // resetting the field
        console.log('success');
      }, error: function(newSelectAnswer, error) {
        alert('Failed to save Selected Answers, with error code: ' + error.message);
      }
    });
  }

  componentDidMount() {
    // function called after render
    this.getQuestions();
  }

  handleSelected(selected) {
    var {selectedAnswers, currentIndex, questions} = this.state;
    selectedAnswers.push(selected);
    this.setState({ selectedAnswers, currentIndex: currentIndex+1 });
    
    //when quiz is over
    if (currentIndex+1 === questions.length) {
      this.context.router.transitionTo('Results');
      // results selectedAnswers
      this.saveSelectedAnswers();
    }
  }

  getPreviousQuestion() {
    var {selectedAnswers, currentIndex, questions} = this.state;
    selectedAnswers.pop();
    this.setState({ selectedAnswers, currentIndex: currentIndex-1 });
  }

  restartQuiz() {
    this.setState({ selectedAnswers: [], currentIndex: 0 });
  }

  getQuestions() {
    var QuestionListItem = Parse.Object.extend("Question");
    var query = new Parse.Query(QuestionListItem);
    query.find({
      success: (results) => { // arrow functions
        var items = results.map(result => result.attributes ).sort((itemA, itemB) => {
          return itemA.Order - itemB.Order;
        });
        this.setState({ questions: items });
      }, 
      error: function(error) {
        alert("Query Error: " + error.message);
      }
    });
  }

  render(): ?ReactElement {
    var { questions, currentIndex } = this.state;
    var question = questions[currentIndex];

    if (!question) { return <div></div>; }

    var answers = [];
    var percent = percent = ( 100 / questions.length ) * currentIndex;
    var contentCom = '';
    
    if (question) {
      var {Answer1, Answer2, Answer3, Answer4} = question;
      answers = [Answer1, Answer2, Answer3, Answer4];

      contentCom = (
          <ReactTransition transitionName="fadeinright" transitionAppear={true} >
            <p key={question.Order} className="current-question">{question.Content}</p>
          </ReactTransition>
      );
    }

    return (
      <div className="Quiz">
        <div className="container">
          <div className="radial-container"><RadialLoader progress={percent}/></div>
          
          { percent !== 0 ? 
            (
              <div>
                <div className="previous-button" onClick={this.getPreviousQuestion}>
                  <i className="fa fa-angle-left"></i> Previous Question 
                </div>
                <div className="restart-button" onClick={this.restartQuiz}>
                  <i className="fa fa-angle-double-left"></i> Restart Quiz
                </div>
              </div>
            ) : 
            (<div className="previous-button not-visible" ></div>) 
          }
          
          {contentCom}

          <br clear="all" />


          <AnswerGroup answers={answers} onAnswerSelected={this.handleSelected} />
                   
          <RouteHandler />

        </div>
      </div>
    );
  }
}

Quiz.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Quiz;
