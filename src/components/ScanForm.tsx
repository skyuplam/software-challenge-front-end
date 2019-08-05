import React from 'react';
import { Formik, FormikHelpers, Form, FormikProps } from 'formik';
import { reduce, kebabCase, capitalize, split, isEmpty } from 'lodash';
import Input from './Input';
import UserSelection from './UserSelection';
import Button from './Button';
import './ScanForm.css';

export interface ScanFormValues {
  name: string;
  scannedByUserId: string;
  elevationMax?: string;
  elevationMin?: string;
}
interface Props {
  onSubmit: (
    values: ScanFormValues,
    actions: FormikHelpers<ScanFormValues>,
  ) => void;
  initialValues: ScanFormValues;
  onCancel: () => void;
  isAdd?: boolean;
}
type Error = Record<string, string>;
function ScanForm({ onSubmit, initialValues, onCancel, isAdd }: Props) {
  function handleValidate({
    name, elevationMin, elevationMax,
  }: ScanFormValues) {
    const reduceErrors = (errs: Error, err: Error | {} | void) => ({ ...errs, ...err });
    const isNan = (num?: string) => num && Number.isNaN(parseFloat(num));
    const keyToName = (key: string) => split(kebabCase(key), '-').map(capitalize).join(' ');

    const elevationErrs = isAdd ? reduce(
      { elevationMax, elevationMin },
      (errs, value, key) => [
        !value && { [key]: [keyToName(key), 'is required!'].join(' ') },
        isNan(value) && { [key]: [keyToName(key), 'is not a number!'].join(' ') },
      ].filter(Boolean).reduce(reduceErrors, errs),
      {},
    ) : {};

    const nameErr = !name ? { name: 'Scan Name is required!' } : {};

    return { ...nameErr, ...elevationErrs };
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={handleValidate}
    >
      {({ touched, isValid }: FormikProps<ScanFormValues>) => (
        <Form
          className="ScanForm"
        >
          <Input
            label="Scan Name"
            name="name"
          />
          {isAdd && (
            <div className="ScanFormElevationGroup">
              <Input
                type="tel"
                label="Elevation Min"
                name="elevationMin"
              />
              <Input
                type="tel"
                label="Elevation Max"
                name="elevationMax"
              />
            </div>
          )}
          <UserSelection
            name="scannedByUserId"
          />
          <div className="ScanFormActions">
            <Button
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isEmpty(touched) || !isValid}
              primary
            >
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ScanForm;
