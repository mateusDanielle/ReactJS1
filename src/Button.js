import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button href="" onClick={props.onClick}>
    {props.title}
  </button>
);
Button.defaultProps = {
  children: "Salvar",
  title: "Enviaaaaaar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;

// export default class Button extends Component {
//   static defaultProps = {
//     children: "Salvar",
//     title: "Enviaaaaaar"
//   };

//   static propTypes = {
//     onClick: PropTypes.func.isRequired,
//     children: PropTypes.string
//   };
//   render() {
//     // return <a href="">{this.props.children}</a>;
//     return (
//       <button href="" onClick={this.props.onClick}>
//         {this.props.title}
//       </button>
//     );
//   }
// }
