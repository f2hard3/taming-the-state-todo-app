import { FILTER_SET } from "../store/actionTypes";

export default function filterReducer(state = "SHOW_ALL", action) {
  switch (action.type) {
    case FILTER_SET:
      return applySetFilter(state, action);
    default:
      return state;
  }
}

function applySetFilter(state, action) {
  return action.filter;
}
