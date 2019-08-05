import * as React from 'react';
import cn from 'clsx';
import './ListItem.css';


interface Props {
  className?: string;
  children?: React.ReactNode;
}
export default function ListItem({
  className, children,
}: Props) {
  return (
    <li
      className={cn('ListItem', className)}
    >
      {children}
    </li>
  );
}
