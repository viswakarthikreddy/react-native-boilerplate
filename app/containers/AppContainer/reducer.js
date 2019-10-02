import * as constants from './constants';
import produce from 'immer';
const initialState = {
  currentUser: false,
  loading: false,
  lastUpdatedDate: null,
};
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.UPDATE_TIME:
        draft.lastUpdatedDate = new Date();
        break;
      default:
        break;
    }
  });

export default reducer;
