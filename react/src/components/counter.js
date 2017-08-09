import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentWillMount() {
    console.log('%c counter content created', 'color: pink')
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 2000);
  }

  componentDidMount() {
    console.log('%c counter content mounted', 'color: pink')
  }

  componentWillUpdate() {
    console.log('%c counter content updated', 'color: pink')
  }

  render() {
    return (
      <span>{this.state.counter}</span>
    );
  }
}
