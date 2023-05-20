import React, { FC } from 'react';
import { ImSpinner2 } from 'react-icons/im';

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
    className={`text-white text-center font-semibold bg-red-400 hover:bg-opacity-80 rounded-lg p-2 inline-flex justify-center items-center ${className}`}
    disabled={disabled || false}
    type={type || 'button'}
    {...props}
    onClick={!isLoading ? onClick : null}
  >
    {isLoading ? <ImSpinner2 className="animate-spin" /> : children}
  </button>
);
