// import * as getFriends from '../actions';
import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS } from '../actions';
/*
{
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}
*/

const initialState = {
  friends: [],
  fetching: false,
  fetched: false,
  error: null
}

export const friendGetter = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetching: true };
    case FRIENDS_FETCHED:
      return { ...state, fetching: false, fetched: true, friends: action.payload };
    case ERROR_FETCHING_FRIENDS:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};