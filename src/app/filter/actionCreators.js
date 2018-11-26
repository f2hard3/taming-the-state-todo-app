import { FILTER_SET } from "../store/actionTypes";

const doSetFilter = filter => ({ type: FILTER_SET, filter });
export default doSetFilter;
