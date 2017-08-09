import React, { Component } from "react";

export default class Alone extends Component {
  componentWillMount() {
    console.info('%c alone view created', 'color: blue')
  }

  componentDidMount() {
    console.info('%c alone view mounted', 'color: blue')
  }

  componentWillUpdate() {
    console.info('%c alone will updated', 'color: blue')
  }

  render() {
    const style = {
      color: 'blue'
    }

    return (
      <span style={style}>I'm alone</span>
    );
  }
}
