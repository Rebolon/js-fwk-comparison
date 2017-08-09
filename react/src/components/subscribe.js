import React, { Component } from "react";
import Emit from "./emit"

export default class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentWillMount() {
    console.info('%c subscribe content created', 'color: blueviolet')
  }

  componentDidMount() {
    console.info('%c subscribe content mounted', 'color: blueviolet')
  }

  componentWillUpdate() {
    console.info('%c subscribe content updated', 'color: blueviolet')
  }

  updateValue(value) {
    this.setState({
      value: value
    });
  }

  render() {
    const { value } = this.state;
    const style = {
      color: 'blueviolet'
    }

    return (
      <ol>
        <li><span style={style}>display field value from emit component {value &&
          <cite>: "{value}"</cite>
        }</span></li>
        <li><Emit value={value} change={this.updateValue.bind(this)}></Emit></li>
      </ol>
    );
  }
}
