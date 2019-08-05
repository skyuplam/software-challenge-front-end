import * as React from 'react';
import { useField } from 'formik';
import Select, { SelectProps } from './Select';


function SelectInput(props: SelectProps) {
  const { children, name, ...rest } = props;
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <Select
      name={name}
      {...rest}
      {...field}
      error={hasError ? meta.error : undefined}
    >
      {children}
    </Select>
  );
}

export default SelectInput;
