import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ScanList from './ScanList';
import { RootState } from 'typesafe-actions';
import { selectSortedScans, selectSortedBy } from './store/scans/selectors';
import * as scansActions from './store/scans/actions';


interface Props {
  scans: ReturnType<typeof selectSortedScans>;
  sortBy: (sortedBy: string) => void;
  sortedBy: string;
}
function ScanContainer({ scans, sortBy, sortedBy }: Props) {
  return (
    <div>
      <ScanList
        scans={scans}
        sortBy={sortBy}
        sortedBy={sortedBy}
      />
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  scans: selectSortedScans(state),
  sortedBy: selectSortedBy(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  sortBy: (sortedBy: string) => {
    dispatch(scansActions.updateSortedBy(sortedBy));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScanContainer);
