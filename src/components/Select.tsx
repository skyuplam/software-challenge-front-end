import React, { useState } from 'react';
import cn from 'clsx';
import { FieldInputProps } from 'formik';
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import './Select.css';
import './Input.css';


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
  const [focused, setFocused] = useState(false);

  function handleOnChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    if (onChange) {
      onChange(evt);
    }
  }

  function handleOnFocus() {
    setFocused(true);
  }

  function handleOnBlur(evt: React.FocusEvent<HTMLSelectElement>) {
    const { onBlur = undefined } = inputProps || {};
    setFocused(false);
    if (onBlur) {
      onBlur(evt);
    }
  }

  return (
    <div className={cn('Select', className)}>
      {label && (
        <div>
          <label htmlFor={id || name}>
            {label}
          </label>
        </div>
      )}
      <div className={cn(
        'InputContainer',
        'InputUnderline',
        { 'InputFocused': focused },
      )}>
        <select
          id={id || name}
          name={name}
          value={value}
          onChange={handleOnChange}
          className={cn('SelectSelect', 'InputBase')}
          onFocus={handleOnFocus}
          {...inputProps}
          onBlur={handleOnBlur}
        >
          {children}
        </select>
        <Icon className="SelectIcon" size={1} path={mdiMenuDown} />
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
