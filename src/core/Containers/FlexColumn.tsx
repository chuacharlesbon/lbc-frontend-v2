import React, { FC } from 'react';

interface FlexColumnProps {
  className?: string;
  id?: string;
  children?: any;
}

export const FlexColumn: FC<FlexColumnProps> = ({ className, id, children, ...props }) => (
  <div className={`flex flex-col ${className}`} id={id} {...props} >
    {children}
  </div>
);
