/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Answer extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props,
        className = `quiz-button qb-${type}`;

    return (
      <div className="col-6">
            <div className="quiz-content">
            <div className={className}>
                <p>Answer</p> 
                
            </div></div>
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
