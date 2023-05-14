import React, { FC } from 'react';

interface FlexRowProps {
  className?: string;
  id?: string;
}

export const FlexRow: FC<FlexRowProps> = ({ className, id, ...props }) => (
  <div className={`flex flex-row ${className}`} id={id} {...props} />
);