import * as React from 'react';
import cn from 'clsx';


interface Props {
  label: React.ReactNode;
  children: React.ReactNode;
  name: string;
  id?: string;
  value?: string | string[] | number;
  className?: string;
  onChange?: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
}
function SelectInput({
  label, children, name, id, value, className, onChange,
}: Props) {
  return (
    <div className={cn(className)}>
      <div>
        <label htmlFor={id || name}>
          {label}
        </label>
      </div>
      <div>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
      </div>
    </div>
  );
}

export default SelectInput;
