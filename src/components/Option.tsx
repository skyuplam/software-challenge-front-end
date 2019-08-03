import * as React from 'react';
import cn from 'clsx';


interface Props {
  className?: string;
  children?: React.ReactNode;
  value: string;
  disabled?: boolean;
  selected?: boolean;
}
export default function Option({
  className, children, value, disabled, selected,
}: Props) {
  return (
    <option
      value={value}
      disabled={disabled}
      selected={selected}
      className={cn(className)}
    >
      {children}
    </option>
  );
}
