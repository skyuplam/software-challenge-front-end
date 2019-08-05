import React from 'react';
import { Formik, FormikHelpers, Form } from 'formik';
import Input from './Input';
import UserSelection from './UserSelection';
import Button from './Button';
import './ScanForm.css';


export interface ScanFormValues {
  name: string;
  scannedByUserId: string;
  elevationMax?: number;
  elevationMin?: number;
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
function ScanForm({ onSubmit, initialValues, onCancel, isAdd }: Props) {
  const OtherFields = isAdd && (
    <div className="ScanFormElevationGroup">
      <Input
        label="Elevation Min"
        name="elevationMin"
      />
      <Input
        label="Elevation Max"
        name="elevationMax"
      />
    </div>
  );

  function handleValidate({ name }: ScanFormValues) {
    return name ? {} : { name: 'Scan name is required!' };
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={handleValidate}
    >
      {() => (
        <Form
          className="ScanForm"
        >
          <Input
            label="Scan Name"
            name="name"
          />
          {OtherFields}
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
