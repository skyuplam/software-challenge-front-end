import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'typesafe-actions';
import ScanList from './ScanList';
import {
  selectSortedScans, selectSortedBy, selectSortOrder,
} from './store/scans/selectors';
import * as scansActions from './store/scans/actions';


type SortOrder = ReturnType<typeof selectSortOrder>;
interface Props {
  scans: ReturnType<typeof selectSortedScans>;
  sortBy: (sortedBy: string) => void;
  sortedBy: string;
  sortOrder: SortOrder;
  updateSortOrder: (sortOrder: SortOrder) => void;
}
function ScanContainer({
  scans, sortBy, sortedBy, sortOrder, updateSortOrder,
}: Props) {
  return (
    <div>
      <ScanList
        scans={scans}
        sortBy={sortBy}
        sortedBy={sortedBy}
        sortOrder={sortOrder}
        updateSortOrder={updateSortOrder}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScanContainer);
