import style from './Backdrop.module.css';
import React from 'react';
import { Component } from 'react';

class Backdrop extends Component {
  render() {
    return <div className={style.backdrop} onClick={this.props.onConfirm}/>
  };
};

export default Backdrop;