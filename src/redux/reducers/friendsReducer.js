import DefaultAvatar from '../../assets/FriendsPage/friendAvatar.png';

const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  defaultAvatar: DefaultAvatar,
  pageSize: 18,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: false,
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
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isLoaded };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return { ...state, followingInProgress: action.isFollowed };
    }
    default:
      return state;
  }
};

export const addFriend = (userId) => ({ type: ADD_FRIEND, userId });
export const deleteFriend = (userId) => ({ type: DELETE_FRIEND, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isLoaded) => ({ type: TOGGLE_IS_FETCHING, isLoaded });
export const toggleFollowingProgress = (isFollowed) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowed });

export default friendsReducer;
