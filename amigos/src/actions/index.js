import axios from 'axios';
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

// action types
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';  // GET
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';
// export const FRIENDS_SAVED = 'FRIENDS_SAVED'; // POST
// export const SAVING_FRIENDS = 'SAVING_FRIENDS';
// export const UPDATING_FRIEND = 'UPDATING_FRIEND'; // PUT
// export const FRIEND_UPDATED = 'FRIEND_UPDATED';
// export const DELETING_FRIEND = 'DELETING_FRIEND'; // DELETE

// action creator functions

// load friends
export const getFriends = () => {
  const getFriends = axios.get('http://localhost:5000/api/friends/get')
  console.log(getFriends);
  return dispatch => {
    dispatch({type: FETCHING_FRIENDS})
    getFriends
      .then(({data}) => {
        dispatch({type: FRIENDS_FETCHED, payload: data})
      }).catch(err => {
        dispatch({type: ERROR_FETCHING_FRIENDS, payload: err})
      })
  }
}

// save friends

// add friends