import React from 'react';
import './ScanList.css';
import { createScanData, createUserData } from './data';


interface Props {
  scans: ReturnType<typeof createScanData>;
  users: ReturnType<typeof createUserData>;
}

function ScanList({ scans, users }: Props) {
  return (
    <div>
      <div className="Header">
        Scans:
      </div>
      <div className="ScanList">
        {scans.map((scan, i) => {
          const user = users.find(
            u => u.id === scan.scannedByUserId,
          );

          return (
            <div
              className="ScanListItem"
              key={i}
            >
              {scan.name}
              {user && (
                <div className="UserName">
                  by {user.name}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScanList;
