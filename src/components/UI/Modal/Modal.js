import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Xmark from '../Icons/Bars/Xmark';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.onClose} />
      <section className={classes.modal}>
        <header className={classes['modal__header']}>
          <div className={classes['modal__header-inner']}>
            <h2 className={classes['modal__title']}>{props.title}</h2>
            <button
              type='button'
              className={classes['modal__close-btn']}
              onClick={props.onClose}
            >
              <Xmark />
            </button>
          </div>
        </header>
        <div className={classes['modal__body']}>{props.children}</div>
      </section>
    </Fragment>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay {...props}>{props.children}</ModalOverlay>,
    document.getElementById('overlays')
  );
};

export default Modal;
