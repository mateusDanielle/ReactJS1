import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  render() {
    // return <a href="">{this.props.children}</a>;
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.title}
      </a>
    );
  }
}

Button.defaultProps = {
  children: "Salvar",
  title: "Enviaaaaaar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

class App extends Component {
  handleClick() {
    alert("Botão clicado");
  }

  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <Button
          onClick={() => {
            alert("Buttom 1");
          }}
        />
        <Button onClick={this.handleClick} title="Enviaaaaaar" />
        {/* <Button>Enviar</Button> */}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
