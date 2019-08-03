import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ScanList from './ScanList';
import { RootState } from 'typesafe-actions';
import { selectSortedScans } from './store/scans/selectors';
import * as scansActions from './store/scans/actions';


interface Props {
  scans: ReturnType<typeof selectSortedScans>;
  sortBy: (sortedBy: string) => void;
}
function ScanContainer({ scans, sortBy }: Props) {
  return (
    <div>
      <ScanList
        scans={scans}
        sortBy={sortBy}
      />
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  scans: selectSortedScans(state),
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
