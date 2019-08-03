import React from 'react';
import { selectScanList } from './store/scans/selectors';
import './ScanList.css';


interface Props {
  scans: ReturnType<typeof selectScanList>;
}

function ScanList({ scans }: Props) {
  return (
    <div>
      <div className="Header">
        Scans:
      </div>
      <div className="ScanList">
        {scans.map((scan, i) => (
          <div
            className="ScanListItem"
            key={i}
          >
            {scan.name}
            {scan.scanedByUser && (
              <div className="UserName">
                by {scan.scanedByUser.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScanList;
