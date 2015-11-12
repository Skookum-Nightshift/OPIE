/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Answer extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSelected(this.props.item);
  }

  render(): ?ReactElement {

    var {type, item} = this.props,
        className = `quiz-button qb-${type}`;

    return (
      
        <div className="quiz-content" onClick={this.handleClick}>
          <div className={className}>
            <p>{item}</p> 
          </div>
        </div>
      
    );
  }
}

Answer.propTypes = {
  type: PropTypes.oneOf(['1','2','3','4']),
};

Answer.defaultProps = {
  type: '1',
};

export default Answer;
