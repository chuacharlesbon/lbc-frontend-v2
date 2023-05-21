import React, { FC } from 'react';

interface DataProps {
  className?: string;
  children?: any;
}

export const LBCSlider: FC<DataProps> = ({ className, children, ...props }) => (
  <div className={`${className}`} {...props} >
    {children}
  </div>
);
