import * as React from 'react';
import cn from 'clsx';
import './List.css';


interface Props {
  className?: string;
  children?: React.ReactNode;
}
export default function List({
  className, children,
}: Props) {
  return (
    <ul
      className={cn('List', className)}
    >
      {children}
    </ul>
  );
}
