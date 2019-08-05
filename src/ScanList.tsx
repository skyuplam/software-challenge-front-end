import React from 'react';
import Icon from '@mdi/react';
import { mdiPlus, mdiSortAscending, mdiSortDescending } from '@mdi/js';
import { Scan, SortOrder } from 'Models';
import { get } from 'lodash';

import List from './components/List';
import ListItem from './components/ListItem';
import ScanItem from './components/ScanItem';
import Button from './components/Button';
import Select from './components/Select';
import Option from './components/Option';
import './ScanList.css';


interface Props {
  scans: Scan[];
  sortBy: (sortedBy: string) => void;
  sortedBy: string;
  sortOrder: SortOrder;
  updateSortOrder: (sortOrder: SortOrder) => void;
}

function ScanList({
  scans, sortBy, sortedBy, sortOrder, updateSortOrder,
}: Props) {
  const sortOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Username', value: 'scannedByUser.name' },
    { label: 'Elevation Max', value: 'elevationMax' },
    { label: 'Elevation Min', value: 'elevationMin' },
  ];

  const SortAsc = (<Icon size={1} path={mdiSortAscending} />);
  const SortDesc = (<Icon size={1} path={mdiSortDescending} />);
  const SortOrderIcon = sortOrder === 'asc' ? SortAsc : SortDesc;

  function changeSortedBy(evt: React.ChangeEvent<HTMLSelectElement>) {
    const sortedBy = get(evt, 'target.value');
    sortBy(sortedBy);
  }

  function toggleSortOrder() {
    updateSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }

  return (
    <div>
      <div className="Header">
        Scans:
      </div>
      <div className="ScanList">
        <List key={sortedBy}>
          <ListItem
            className="ScanListItem"
          >
            <div className="ScanListHeader">
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
                {SortOrderIcon}
              </Button>
              <Button
                className="ScanListAddButton"
                icon
              >
                <Icon size={1} path={mdiPlus} />
              </Button>
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
