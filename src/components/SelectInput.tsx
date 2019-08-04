import * as React from 'react';
import cn from 'clsx';
import { useField } from 'formik';


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
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;
  const ErrorMsg = hasError && (
    <div className="InputErrorContainer">
      {meta.error}
    </div>
  );

  function handleOnChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    field.onChange(evt);
    if (onChange) {
      onChange(evt);
    }
  }

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
          {...field}
          onChange={handleOnChange}
        >
          {children}
        </select>
      </div>
      {ErrorMsg}
    </div>
  );
}

export default SelectInput;
