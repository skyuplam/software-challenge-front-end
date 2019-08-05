import * as React from 'react';
import cn from 'clsx';
import { FieldInputProps } from 'formik';


type Value = string | string[] | number;
export interface SelectProps {
  label?: React.ReactNode;
  children: React.ReactNode;
  name: string;
  id?: string;
  value?: Value;
  className?: string;
  onChange?: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
  inputProps?: FieldInputProps<Value>;
  error?: string;
}
function SelectInput({
  label, children, name, id, value, className, onChange, inputProps, error,
}: SelectProps) {

  function handleOnChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    if (onChange) {
      onChange(evt);
    }
  }

  return (
    <div className={cn(className)}>
      {label && (
        <div>
          <label htmlFor={id || name}>
            {label}
          </label>
        </div>
      )}
      <div>
        <select
          id={id || name}
          name={name}
          value={value}
          onChange={handleOnChange}
          {...inputProps}
        >
          {children}
        </select>
      </div>
      {error && (
        <div className="InputErrorContainer">
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default SelectInput;
