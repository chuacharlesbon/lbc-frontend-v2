import React, { FC } from 'react';

interface SpanProps {
  className?: string;
  props?: any;
  children?: any;
}

export const Span: FC<SpanProps> = ({ className, children, ...props }) => (
  <span className={`${className}`} {...props}>
    {children}
  </span>
);
