import React from 'react';
import Icon from '@mdi/react';
import { mdiSort } from '@mdi/js';
import { Scan } from 'Models';

import './ScanList.css';
import List from './components/List';
import ListItem from './components/ListItem';
import SelectInput from './components/SelectInput';
import Option from './components/Option';


interface Props {
  scans: Scan[];
  sortBy: (sortedBy: string) => void;
}

function ScanList({ scans, sortBy }: Props) {
  const sortOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Username', value: 'scannedByUser.name' },
    { label: 'Elevation Max', value: 'elevationMax' },
    { label: 'Elevation Min', value: 'elevationMin' },
  ];

  function changeSortedBy(evt: React.ChangeEvent<HTMLSelectElement>) {
    const sortedBy = evt.target.value;
    sortBy(sortedBy);
  }

  return (
    <div>
      <div className="Header">
        Scans:
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
      </div>
      <List className="ScanList">
        {scans.map((scan, i) => (
          <ListItem
            className="ScanListItem"
            key={i}
          >
            <div className="ScanContainer">
              <span className="ScanName">{scan.name}</span>
              {scan.scannedByUser && (
                <div className="UserName">
                  by {scan.scannedByUser.name}
                </div>
              )}
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ScanList;
