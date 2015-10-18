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
        <Answer type='1' />
        <Answer type='2' />
        <Answer type='3' />
        <Answer type='4' />
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
