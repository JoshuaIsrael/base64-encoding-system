import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import styles from './styles.module.scss';

type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

type AlertProps = {
  message: string;
  variant?: Variant;
  onClose: () => void;
  duration?: number;
};

function Toast ({ message, variant = 'primary', onClose, duration = 3 }: AlertProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleExited = () => {
    onClose();
  };

  useEffect(() => {
    setShow(true)
    setTimeout(() => {
      handleClose();
    }, duration * 1000)
  }, [])

  return (
    <CSSTransition in={show} timeout={300} classNames={styles.Toast} unmountOnExit onExited={handleExited}>
      <Alert show={show} variant={variant} onClose={handleClose} dismissible className="m-3 position-absolute top-0 start-50 translate-middle-x">
        {message}
      </Alert>
    </CSSTransition>
  );
}

export const showToast = (message: string, variant?: Variant, duration?: number) => {
  const toastElement = document.createElement('div');
  document.body.appendChild(toastElement);
  const closeAlert = () => {
    ReactDOM.unmountComponentAtNode(toastElement);
    toastElement.remove();
  };
  ReactDOM.render(<Toast message={message} variant={variant} onClose={closeAlert} duration={duration} />, toastElement);
};
