import * as actions from '../actions/typeActions';

const initStage = {
  mostStarred: {
    name: '',
    data: []
  },
  mostWatched: {
    name: '',
    data: []
  },
  mostDownloaded: {
    name: '',
    data: []
  },
  topTags: {
    name: '',
    data: []
  },
  topContributors: {
    name: '',
    data: []
  },
  Newest: {
    name: '',
    data: []
  },
  error: null
};
export const tops = (state = initStage, action) => {
  let newState = {};
  switch (action.type) {
    case actions.GET_TOP_SUCCESS:
      let data = Object.assign({}, action.tops);
      newState = Object.assign({}, state);
      if (data) {
        newState.mostStarred.data = [...data['Most Starred']];
        newState.mostWatched.data = [...data['Most Watched']];
        newState.mostDownloaded.data = [...data['Most Downloaded']];
        newState.topTags.data = [...data['Top Tags']];
        newState.topContributors.data = [...data['Top Contributors']];
        newState.Newest.data = [...data['Newest']];
      }
      return newState;
    case actions.GET_TOP_ERROR:
      newState = Object.assign({}, state);
      newState.error = { ...action.error };
      return newState;
    default:
      return state;
  }
};
export default tops;
