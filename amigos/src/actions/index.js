import axios from 'axios';
/*
{
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false, // show loading
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}
*/

// action types
export const ERROR = 'ERROR';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';  // GET
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

export const SAVING_FRIENDS = 'SAVING_FRIENDS'; // POST
export const FRIENDS_SAVED = 'FRIENDS_SAVED';

// POST ERROR
// export const UPDATING_FRIEND = 'UPDATING_FRIEND'; // PUT
// export const FRIEND_UPDATED = 'FRIEND_UPDATED';
// PUT ERROR
// export const DELETING_FRIEND = 'DELETING_FRIEND'; // DELETE
// DELETE ERROR

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
        dispatch({type: ERROR, payload: err})
      })
  }
}

// add friend
export const addFriend = friend => {
  const addFriend = axios.post('http://localhost:5000/api/friends/create', friend)
  console.log(addFriend);
  return dispatch => {
    dispatch({type: SAVING_FRIENDS})
    addFriend
      .then(({data}) => {
        dispatch({type: FRIENDS_SAVED, payload: data})
      }).catch(err => {
        dispatch({type: ERROR, payload: err})
      })
  }
}

// update friend