/** @flow */

require('./styles.css');

import React from 'react';
import Question from 'Question';

var {PropTypes} = React;


class QuestionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: ['Go to store, interesting'] };

        // this.renderListItem = this.renderListItem.bind(this);
        // if you want to bind
        this.getQuestions = this.getQuestions.bind(this);
    }

    componentDidMount() {
        // function called after render
        this.getQuestions();
    }

    getQuestions() {
        var QuestionListItem = Parse.Object.extend("Question");
        var query = new Parse.Query(QuestionListItem);
        query.find({
            success: (results) => { // arrow functions
                this.setState({ items: results.map(result => result.attributes ) });
            }, 
            error: function(error) {
                alert("Query Error: " + error.message);
            }
        });
    }


    renderListItem(items) {
        return items.map(item => <Question item={item} /> );
        // return items.map((item) => {
        //     return (
        //         <Question item={item} />
        //     );
        // });
    }

    render(): ?ReactElement {
    return (
        <div className="QuestionList content"> 
            <h2> Current Questions </h2>
            {this.renderListItem(this.state.items)}
        </div>   
    );
  }
}

QuestionList.defaultProps = {
  type: '1',
};

export default QuestionList;
