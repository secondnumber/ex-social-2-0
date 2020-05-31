const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 12,
  currentPage: 1,
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
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.pageNumber };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    default:
      return state;
  }
};

export const addFriendAC = (userId) => ({ type: ADD_FRIEND, userId });
export const deleteFriendAC = (userId) => ({ type: DELETE_FRIEND, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export default friendsReducer;
