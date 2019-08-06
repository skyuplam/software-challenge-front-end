import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { Scan } from 'Models';
import ScanList from '../components/ScanList';
import {
  selectSortedScans, selectSortedBy, selectSortOrder,
} from '../store/scans/selectors';
import * as scansActions from '../store/scans/actions';


type SortOrder = ReturnType<typeof selectSortOrder>;
interface Props {
  scans: ReturnType<typeof selectSortedScans>;
  sortBy: (sortedBy: string) => void;
  sortedBy: string;
  sortOrder: SortOrder;
  updateSortOrder: (sortOrder: SortOrder) => void;
  addScan: (scan: Scan) => void;
}
function ScanContainer({
  scans, sortBy, sortedBy, sortOrder, updateSortOrder, addScan,
}: Props) {
  return (
    <div>
      <ScanList
        scans={scans}
        sortBy={sortBy}
        sortedBy={sortedBy}
        sortOrder={sortOrder}
        updateSortOrder={updateSortOrder}
        addScan={addScan}
      />
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  scans: selectSortedScans(state),
  sortedBy: selectSortedBy(state),
  sortOrder: selectSortOrder(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  sortBy: (sortedBy: string) => {
    dispatch(scansActions.updateSortedBy(sortedBy));
  },
  updateSortOrder: (sortOrder: SortOrder) => {
    dispatch(scansActions.updateSortOrder(sortOrder));
  },
  addScan: (scan: Scan) => {
    dispatch(scansActions.addScan(scan));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScanContainer);
