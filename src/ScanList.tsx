import React from 'react';
import './ScanList.css'
import { createScanData, createUserData } from './data'


interface Props {
  scans: ReturnType<typeof createScanData>;
  users: ReturnType<typeof createUserData>;
}

class ScanList extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="Header">
          Scans:
        </div>
        <div className="ScanList">
          {this.props.scans.map((scan, i) => {
            const user = this.props.users.find(
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
}

export default ScanList;
