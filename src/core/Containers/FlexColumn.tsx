import React, { FC } from 'react';

interface FlexColumnProps {
  className?: string;
  id?: string;
}

export const FlexColumn: FC<FlexColumnProps> = ({ className, id, ...props }) => (
  <div className={`flex flex-col ${className}`} id={id} {...props} />
);
