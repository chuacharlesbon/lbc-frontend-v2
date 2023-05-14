import React, { FC } from 'react';

interface DivProps {
  className?: string;
}

export const Div: FC<DivProps> = ({ className, ...props }) => (
  <div className={`${className}`} {...props} />
);
