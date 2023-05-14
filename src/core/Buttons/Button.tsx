import React, { FC } from 'react';

interface ButtonProps {
  className?: string;
  props?: any;
  onClick?: Function;
  type?: string;
  isLoading?: boolean;
  disabled?: boolean;
  children: any;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  props,
  onClick,
  type,
  isLoading,
  disabled,
}) => (
  <button
    className={`text-white bg-primary-100 hover:bg-opacity-80 font-poppins font-regular rounded-lg p-3 text-center inline-flex items-center ${className}`}
    disabled={disabled || false}
    type={type || 'button'}
    {...props}
    onClick={!isLoading ? onClick : null}
  >
    {isLoading ? <i className="fad fa-spinner-third animate-spin text-2xl" /> : children}
  </button>
);
