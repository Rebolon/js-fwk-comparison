import React, { Component } from "react";

export default class Hello extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.info('%c hello content created', 'color: orange')
  }

  componentDidMount() {
    console.info('%c hello content mounted', 'color: orange')
  }

  componentWillUpdate() {
    console.info('%c hello content updated', 'color: orange')
  }

  render() {
    const style = {
      color: 'orange'
    }

    return (
      <span style={style}>Hello {this.props.name}!</span>
    );
  }
}
