import * as React from 'react';
import ScanList from './ScanList';
import { createScanData, createUserData } from './data';


function ScanContainer() {
  const [scans] = React.useState(createScanData());
  const [users] = React.useState(createUserData());

  return (
    <div>
      <ScanList
        scans={scans}
        users={users}
      />
    </div>
  );
}

export default ScanContainer;
