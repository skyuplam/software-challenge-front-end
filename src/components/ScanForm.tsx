import React from 'react';
import { Formik, FormikHelpers, Form } from 'formik';
import Input from './Input';
import UserSelection from './UserSelection';
import Button from './Button';


interface Values {
  name: string;
  scannedByUserId: string;
  elevationMax?: number;
  elevationMin?: number;
}
interface Props {
  onSubmit: (values: Values, actions: FormikHelpers<Values>) => void;
  initialValues: Values;
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
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Input
            label="Scan Name"
            name="name"
          />
          {OtherFields}
          <UserSelection
            name="scannedByUserId"
          />
          <div className="ScanItemEditActions">
            <Button
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
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
