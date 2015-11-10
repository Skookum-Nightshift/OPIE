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
    }
    
    renderListItem(items) {
        return items.map((item, index) => <Question key={item.id} item={item} itemDeleted={this.props.itemDeleted} index={index} /> );
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
            {this.renderListItem(this.props.items)}
        </div>   
    );
  }
}

QuestionList.defaultProps = {
  type: '1',
};

export default QuestionList;
