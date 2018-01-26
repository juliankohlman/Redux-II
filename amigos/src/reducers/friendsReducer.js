// import * as getFriends from '../actions';
import { FETCHING_FRIENDS, FRIENDS_FETCHED, SAVING_FRIENDS, FRIENDS_SAVED, ERROR } from '../actions';
// import * as actionTypes from '../actions';
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
  saving: false,
  saved: false,
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetching: true };
    case FRIENDS_FETCHED:
      return { ...state, fetching: false, fetched: true, friends: action.payload };
    case SAVING_FRIENDS:
      return { ...state, saving: true };//friends: action.payload

    case FRIENDS_SAVED:
      return { ...state, saving: false,friends: action.payload } //friends: action.payload

    case ERROR:
      return { ...state, fetching: false, error: action.payload };
    // UPDATING_FRIEND
    // FRIEND_UPDATED
    default:
      return state;
  }
};