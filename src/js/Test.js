import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
 * React の復習
 */
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      int: props.int,
      str: props.str,
      bar: props.bar,
    };
  }

  render() {
    const states = this.state;
    const { int } = this.state;
    console.log(states);
    console.log(int);
    return (
      <div>
        <h1>aaaaa</h1>
        <h3>{states.int}</h3>
        <h3>{states.str}</h3>
        <h3>{states.bar.str}</h3>
      </div>
    );
  }
}

Test.propTypes = {
  int: PropTypes.number.isRequired,
  str: PropTypes.string.isRequired,
  bar: PropTypes.object.isRequired,
};

Test.defalutProps = {
  int: 0,
  str: '',
  obj1: {},
};
