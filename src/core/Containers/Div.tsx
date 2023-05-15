import React, { FC } from 'react';

interface DivProps {
  className?: string;
  children?: any;
}

export const Div: FC<DivProps> = ({ className, children, ...props }) => (
  <div className={`${className}`} {...props} >
    {children}
  </div>
);
