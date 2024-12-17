import React from 'react';

import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  label?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type, className, label, children, ...rest
  } = props;

  return (
    <button type={type} className={`${className || ''} ${styles.button} ${styles.gradient}`} {...rest}>
      {label || children}
    </button>
  );
};

export default Button;
