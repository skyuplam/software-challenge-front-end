import React from 'react';
import cn from 'clsx';
import { useField } from 'formik';


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

  const hasError = meta.touched && meta.error;
  const ErrorMsg = hasError && (
    <div className="InputErrorContainer">
      {meta.error}
    </div>
  );

  return (
    <div className={cn('InputRoot', className)}>
      <div className="InputLabelContainer">
        <label className="InputLabel" htmlFor={id || name}>
          {label}
        </label>
      </div>
      <div className="InputContainer">
        <input
          id={id}
          name={name}
          className="Input"
          {...field}
        />
      </div>
      {ErrorMsg}
    </div>
  );
}

export default Input;
