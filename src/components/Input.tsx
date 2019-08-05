import React, { useState } from 'react';
import cn from 'clsx';
import { useField } from 'formik';
import './Input.css';


interface Props {
  className?: string;
  label?: React.ReactNode;
  id?: string;
  name: string;
}
function Input({
  className, label, id, name,
}: Props) {
  const [field, meta] = useField(name);
  const [focused, setFocused] = useState(false);
  const { onBlur, ...restField } = field;

  const hasError = meta.touched && meta.error;
  const ErrorMsg = hasError && (
    <div className="InputErrorContainer">
      {meta.error}
    </div>
  );

  function handleOnFocus() {
    setFocused(true);
  }

  function handleOnBlur(evt: React.FocusEvent<HTMLInputElement>) {
    setFocused(false);
    onBlur(evt);
  }

  return (
    <div className={cn('InputRoot', className)}>
      <div className="InputLabelContainer">
        <label className="InputLabel" htmlFor={id || name}>
          {label}
        </label>
      </div>
      <div className={cn(
        'InputContainer',
        'InputUnderline',
        { 'InputFocused': focused },
      )}>
        <input
          id={id || name}
          name={name}
          className="InputBase"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...restField}
        />
      </div>
      {ErrorMsg}
    </div>
  );
}

export default Input;
