import { Component, Fragment } from 'react';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';
import ReactDOM from 'react-dom';


class ErrorModal extends Component{

render() {
  return (
    <Fragment>
      {ReactDOM.createPortal(
         <Backdrop onConfirm={this.props.onConfirm}/>,
         document.getElementById('backdrop-root')
      )}
     {ReactDOM.createPortal(
         <ModalOverlay onConfirm={this.props.onConfirm}
         title={this.props.title}
         message={this.props.message}
         />,
         document.getElementById('modal-root')
      )}
    </Fragment>
  );
}
}

export default ErrorModal;
