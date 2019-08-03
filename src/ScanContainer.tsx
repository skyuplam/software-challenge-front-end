import * as React from 'react';
import { connect } from 'react-redux';
import ScanList from './ScanList';
import { RootState } from 'typesafe-actions';
import { selectScanList } from './store/scans/selectors';


interface Props {
  scans: ReturnType<typeof selectScanList>;
}
function ScanContainer({ scans }: Props) {
  return (
    <div>
      <ScanList
        scans={scans}
      />
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  scans: selectScanList(state),
});

export default connect(
  mapStateToProps,
)(ScanContainer);
