import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

import "./style.scss";

class App extends Component {
  state = {
    counter: 0
  };

  //   componentDidMount() {}

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.counter <= 10;
  //   }

  //   componentDidUpdate(prevProps, prevState) {}

  //   componentWillUnmount() {}

  handleClick = () => {
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });
    // this.setState(state => ({ counter: state.counter + 1 }));
    // this.setState(state => ({ counter: state.counter + 1 }));
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        {/* className e style */}
        <h1>Hello Rocketseat</h1>
        <h2>{this.state.counter}</h2>
        {/* <Button
          onClick={() => {
            alert("Buttom 1");
          }}
        /> */}
        <Button onClick={this.handleClick} title="Enviaaaaaar" />
        {/* <Button>Enviar</Button> */}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
