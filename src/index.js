import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvar",
    title: "Enviaaaaaar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };
  render() {
    // return <a href="">{this.props.children}</a>;
    return (
      <button href="" onClick={this.props.onClick}>
        {this.props.title}
      </button>
    );
  }
}

class App extends Component {
  state = {
    counter: 0
  };
  handleClick = () => {
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });
    this.setState(state => ({ counter: state.counter + 1 }));
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  render() {
    return (
      <Fragment>
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
