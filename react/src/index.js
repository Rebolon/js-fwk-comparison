import React, { Component } from "react";
import { render } from "react-dom";
import Alone from "./components/alone"
import Hello from "./components/hello"
import Counter from "./components/counter"
import Subscribe from './components/subscribe'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Reactjs 15'
    };
  }

  componentDidMount() {
    console.info('%c app view mounted', 'color: black')
  }

  componentWillUpdate() {
    console.info('%c app view updated', 'color: black')
  }

  /**
   * @returns {XML}
   */
  render() {
    const { name } = this.state;
    const style = {

    }

    return (
      <ul>
        <li>Main component
          <ul>
            <li>Hello component : <Hello name={name} /></li>
            <li>Alone component : <Alone></Alone></li>
            <li>Counter component : <Counter></Counter></li>
            <li>Subscribe & Emit components :
              <Subscribe></Subscribe>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

render(<App />, document.getElementById("root"));
