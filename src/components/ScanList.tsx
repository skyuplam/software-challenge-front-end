import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiPlus, mdiSortAscending } from '@mdi/js';
import { Scan, SortOrder } from 'Models';
import { get } from 'lodash';
import cuid from 'cuid';

import List from './List';
import ListItem from './ListItem';
import ScanItem from './ScanItem';
import Button from './Button';
import Select from './Select';
import Option from './Option';
import ScanForm, { ScanFormValues } from './ScanForm';
import './ScanList.css';
import { FormikHelpers } from 'formik';


interface Props {
  scans: Scan[];
  sortBy: (sortedBy: string) => void;
  sortedBy: string;
  sortOrder: SortOrder;
  updateSortOrder: (sortOrder: SortOrder) => void;
  addScan: (scan: Scan) => void;
}

function ScanList({
  scans, sortBy, sortedBy, sortOrder, updateSortOrder, addScan,
}: Props) {
  const [showScanForm, setShowScanForm] = useState(false);
  const sortOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Username', value: 'scannedByUser.name' },
    { label: 'Elevation Max', value: 'elevationMax' },
    { label: 'Elevation Min', value: 'elevationMin' },
  ];

  function changeSortedBy(evt: React.ChangeEvent<HTMLSelectElement>) {
    const sortedBy = get(evt, 'target.value');
    sortBy(sortedBy);
  }

  function toggleSortOrder() {
    updateSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }

  function toggleShowScanForm() {
    setShowScanForm(!showScanForm);
  }

  function handleSubmit(
    values: ScanFormValues,
    actions: FormikHelpers<ScanFormValues>,
  ) {
    addScan({
      id: cuid(),
      name: values.name,
      scannedByUserId: parseInt(values.scannedByUserId, 10),
      elevationMin: values.elevationMin
        ? parseFloat(values.elevationMin) : 0,
      elevationMax: values.elevationMax
        ? parseFloat(values.elevationMax) : 0,
    });
    actions.setSubmitting(false);
    toggleShowScanForm();
  }

  return (
    <div>
      <div className="Header">
        Scans:
      </div>
      <div className="ScanList">
        <List key={[sortedBy, sortOrder].join('-')}>
          <ListItem
            className="ScanListItem"
          >
            <div className="ScanListHeader">
              <div className="ScanListControllers">
                <Select
                  label="Sort by"
                  name="sortedBy"
                  value={sortedBy}
                  onChange={changeSortedBy}
                >
                  {sortOptions.map((opt) => (
                    <Option key={opt.value} value={opt.value}>
                      {opt.label}
                    </Option>
                  ))}
                </Select>
                <Button
                  className="ScanListSortOrderButton"
                  onClick={toggleSortOrder}
                  icon
                >
                  <Icon
                    size={1}
                    path={mdiSortAscending}
                    vertical={sortOrder === 'desc'}
                    className="ScanListSortOrderIcon"
                  />
                </Button>
                <Button
                  className="ScanListAddButton"
                  icon
                  onClick={toggleShowScanForm}
                >
                  <Icon
                    size={1}
                    path={mdiPlus}
                    rotate={showScanForm ? 45 : 0}
                    className="ScanListAddIcon"
                  />
                </Button>
              </div>
              <div className="ScanListNewScanForm">
                {showScanForm && (
                  <ScanForm
                    onSubmit={handleSubmit}
                    initialValues={{
                      name: '',
                      scannedByUserId: '0',
                      elevationMin: '',
                      elevationMax: '',
                    }}
                    onCancel={toggleShowScanForm}
                    isAdd
                  />
                )}
              </div>
            </div>
          </ListItem>
          {scans.map((scan, i) => (
            <ListItem
              className="ScanListItem"
              key={i}
            >
              <ScanItem scan={scan} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default ScanList;
