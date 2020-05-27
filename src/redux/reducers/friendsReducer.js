const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND: {
      console.log('add' + action.userId);
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case DELETE_FRIEND: {
      console.log('delete' + action.userId);
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    default:
      return state;
  }
};

export const addFriendAC = (userId) => ({ type: ADD_FRIEND, userId });
export const deleteFriendAC = (userId) => ({ type: DELETE_FRIEND, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default friendsReducer;
