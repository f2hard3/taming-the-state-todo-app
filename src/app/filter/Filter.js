import React from "react";
import { connect } from "react-redux";
import doSetFilter from "./actionCreators";

function Filter({ onSetFilter }) {
  return (
    <div>
      Show
      <button type="button" onClick={() => onSetFilter("SHOW_ALL")}>
        All
      </button>
      <button type="button" onClick={() => onSetFilter("SHOW_COMPLETED")}>
        Completed
      </button>
      <button type="button" onClick={() => onSetFilter("SHOW_INCOMPLETED")}>
        Incompleted
      </button>
    </div>
  );
}

const mapDispatchToPropsFilter = dispatch => ({
  onSetFilter: filterType => dispatch(doSetFilter(filterType))
});

const ConnectedFilter = connect(
  null,
  mapDispatchToPropsFilter
)(Filter);

export default ConnectedFilter;
