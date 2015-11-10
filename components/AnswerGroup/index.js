/** @flow */

require('./styles.css');

import React from 'react';
import RadialLoader from 'RadialLoader';
import Answer from 'Answer';
var {PropTypes} = React;

class AnswerGroup extends React.Component {

  render(): ?ReactElement {

    return (
      <div>
        {this.props.answers.map((answer, index)=>{
          return <Answer type={index+1} item={answer} onSelected={this.props.onAnswerSelected}/>;
        })}
      </div>
    );
  }
}

AnswerGroup.propTypes = {
  type: PropTypes.oneOf(['black', 'grey', 'pink', 'white', 'indigo','facebook','twitter']),
  children: PropTypes.any.isRequired,
};

AnswerGroup.defaultProps = {
  type: 'black',
};

export default AnswerGroup;
