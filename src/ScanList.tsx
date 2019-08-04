import React from 'react';
import Icon from '@mdi/react';
import { mdiSort, mdiPlus } from '@mdi/js';
import { Scan } from 'Models';
import { head, get } from 'lodash';
import { Formik, Form } from 'formik';

import './ScanList.css';
import List from './components/List';
import ListItem from './components/ListItem';
import SelectInput from './components/SelectInput';
import Option from './components/Option';
import ScanItem from './components/ScanItem';
import Button from './components/Button';


interface Props {
  scans: Scan[];
  sortBy: (sortedBy: string) => void;
  sortedBy: string;
}

function ScanList({ scans, sortBy, sortedBy }: Props) {
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

  function handleSubmit() {
  }

  return (
    <div>
      <div className="Header">
        Scans:
        <Formik
          initialValues={{
            order: get(head(sortOptions), 'value', ''),
          }}
          onSubmit={handleSubmit}
          handleChange={changeSortedBy}
        >
          {() => (
            <Form>
              <SelectInput
                label={(
                  <span>
                    <Icon size={1} path={mdiSort} />
                    Sort By
                  </span>
                )}
                name="order"
                onChange={changeSortedBy}
              >
                {sortOptions.map(({ value, label }) => (
                  <Option key={value} value={value}>
                    {label}
                  </Option>
                ))}
              </SelectInput>
            </Form>
          )}
        </Formik>
        <Button>
          <Icon size={1} path={mdiPlus} />
        </Button>
      </div>
      <List key={sortedBy} className="ScanList">
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
  );
}

export default ScanList;
