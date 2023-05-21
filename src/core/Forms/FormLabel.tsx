import React, { FC } from 'react';

interface DataProps {
  className?: string;
  props?: any;
  children?: any;
  isRequired?: boolean;
}

export const FormLabel: FC<DataProps> = ({ className, children, isRequired, ...props }) => (
  <p className={`${className}`} {...props}>
    {children}
    <span className={isRequired ? 'text-red-400' : ''}>{isRequired ? '*' : ''}</span>
  </p>
);
