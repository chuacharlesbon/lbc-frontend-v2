import React, { FC } from 'react';

interface ButtonProps {
  className?: string;
  props?: any;
  onClick?: Function;
  type?: string;
  disabled?: boolean;
  children: any;
}

export const RawButton: FC<ButtonProps> = ({
  className,
  children,
  props,
  onClick,
  type,
  disabled,
}) => (
  <button
    className={`${className}`}
    disabled={disabled || false}
    type={type || 'button'}
    {...props}
    onClick={onClick}
  >
    {children}
  </button>
);
