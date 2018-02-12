import {
  GET_SPINS_SEARCH_SUCCESS,
  GET_SPINS_SEARCH_ERROR,
  SEARCH_LOADING
} from "../actions/typeActions";

const defaultState = {
  spinSearch: [],
  meta:{},
  error: null,
  loading: false
};
export const search = (state = defaultState, action: any) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_SPINS_SEARCH_SUCCESS:
      if (action.spins && action.spins.data) {
        newState.spinSearch = [...action.spins.data];
        newState.meta = Object.assign({}, action.spins.meta);
      }
      return newState;
    case GET_SPINS_SEARCH_ERROR:
      newState.error = action.error;
      return newState;
    case SEARCH_LOADING:
      newState.loading = action.loading;
      return newState;
    default:
      return state;
  }
};