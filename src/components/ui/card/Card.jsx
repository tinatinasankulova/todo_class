import style from './Card.module.css';
import { Component } from 'react';

class Card extends Component {
  render(){
  return (
    <div className={`${style.card} ${this.props.className}`}>{this.props.children}</div>
  );
};
};

export default Card;