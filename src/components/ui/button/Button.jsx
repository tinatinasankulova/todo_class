import style from './Button.module.css'
import { Component } from 'react';
class Button extends Component {
  render() {
  return (
    <button className={`${style.button} ${this.props.className}`}
   id={this.props.id}
    type={this.props.type || 'submit'}
    onClick={this.props.onClick}
    >{this.props.children}</button>
  )
};
};

export default Button;