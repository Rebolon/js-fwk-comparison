import React, { Component } from "react";

export default class Emit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentWillMount() {
    console.info('%c emit content created', 'color: brown')
  }

  componentDidMount() {
    console.info('%c emit content mounted', 'color: brown')
  }

  componentWillUpdate() {
    console.info('%c emit content updated', 'color: brown')
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({
      value: value
    });
    this.props.change(value)
  }

  render() {
    const { value } = this.state;
    const style = {
      color: 'brown'
    }

    return (
      <span style={style}>fill something here <input value={value} onChange={this.handleChange.bind(this)}/> </span>
    );
  }
}
