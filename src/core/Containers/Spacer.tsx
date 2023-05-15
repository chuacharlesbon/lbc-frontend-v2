import React, { FC } from 'react';

interface SpacerProps {
  className?: string;
}

export const Spacer: FC<SpacerProps> = ({ className, ...props }) => (
  <div className={`${className}`} {...props} />
);
