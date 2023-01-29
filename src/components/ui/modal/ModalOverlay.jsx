import style from './ModalOverlay.module.css';
import { Component } from 'react';
import Button from '../button/Button';
import Card from '../card/Card';

class ModalOverlay extends Component {
  render() {
    return (
      <Card className={style.modal}>
          <header className={style.header}>
            <h2>{this.props.title}</h2>
          </header>
          <div className={style.content}>
          <p>{this.props.message}</p>
          </div>
          <footer className={style.actions}>
            <Button onClick={this.props.onConfirm}>Okey</Button>
          </footer>
        </Card>
    );
  };
};

export default ModalOverlay;
