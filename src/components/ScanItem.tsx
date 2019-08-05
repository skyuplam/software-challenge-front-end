import React, { useState } from 'react';
import { Scan } from 'Models';
import { get } from 'lodash';
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { FormikHelpers } from 'formik';

import Button from './Button';
import * as scansActions from '../store/scans/actions';
import ScanForm from './ScanForm';
import './ScanItem.css';


interface Values {
  name: string;
  scannedByUserId: string;
}
interface Props {
  scan: Scan;
  updateScan: (id: string, name: string, scannedByUserId: number) => void;
  onEdit?: () => void;
}
function ScanItem({
  scan, onEdit, updateScan,
}: Props) {
  const [isEditing, setEditing] = useState(false);
  const username = get(scan, 'scannedByUser.name');
  const User = username && (
    <div className="ScanItemScannedByUser">
      {['by', username].join(' ')}
    </div>
  );

  function handleEditAction() {
    if (onEdit) {
      onEdit();
    }
    // toggle isEditing
    setEditing(!isEditing);
  }

  function handleSubmit(
    values: Values,
    actions: FormikHelpers<Values>,
  ) {
    updateScan(
      scan.id,
      values.name,
      parseInt(values.scannedByUserId, 10),
    );
    actions.setSubmitting(false);
    setEditing(!isEditing);
  }

  const ReadItem = !isEditing && (
    <div className="ScanItemRead">
      <div className="ScanItemContent">
        <div className="ScanItemName">
          <span>{scan.name}</span>
          <span className="ScanItemElevation">
            ({scan.elevationMin}, {scan.elevationMax})
          </span>
        </div>
        {User}
      </div>
      <div className="ScanItemActions">
        <Button
          onClick={handleEditAction}
          icon
        >
          <Icon size={1} path={mdiPencil} />
        </Button>
      </div>
    </div>
  );

  const EditItem = isEditing && (
    <div className="ScanItemEdit">
      <ScanForm
        onSubmit={handleSubmit}
        onCancel={handleEditAction}
        initialValues={{
          name: scan.name,
          scannedByUserId: `${scan.scannedByUserId}`,
        }}
      />
    </div>
  );

  return (
    <div className="ScanItemContainer">
      {ReadItem}
      {EditItem}
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateScan: (id: string, name: string, scannedByUserId: number) => {
    dispatch(scansActions.updateScan(id, name, scannedByUserId));
  },
});

export default connect(
  undefined,
  mapDispatchToProps,
)(ScanItem);
