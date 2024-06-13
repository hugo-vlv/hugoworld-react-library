import React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  label?: string;
}

export default function Button(props: ButtonProps) {
  const { type, className, label, children, ...rest } = props;

  return <button type={type} className={`${className || ''} ${styles.button} ${styles.gradient}`} {...rest}>
    {label || children}
  </button>;
}
