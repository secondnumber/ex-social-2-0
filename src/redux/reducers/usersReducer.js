import DefaultAvatar from '../../assets/FriendsPage/friendAvatar.png';
import { usersAPI } from '../../api/api';
import { updateObjectsInArray } from '../../utils/objectsHelper';

const ADD_FRIEND = 'users/ADD_FRIEND';
const DELETE_FRIEND = 'users/DELETE_FRIEND';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  usersList: [],
  defaultAvatar: DefaultAvatar,
  pageSize: 9,
  totalUsersCount: 0,
  currentPage: 1,
  isFollowed: true,
  followingInProgress: [],
};

let usersReducer;
usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND: {
      return {
        ...state,
        users: updateObjectsInArray(state.usersList, action.userId, 'id', {
          followed: true,
        }),
      };
    }
    case DELETE_FRIEND: {
      return {
        ...state,
        users: updateObjectsInArray(state.usersList, action.userId, 'id', {
          followed: false,
        }),
      };
    }
    case SET_USERS: {
      return { ...state, usersList: action.users };
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
      return {
        ...state,
        followingInProgress: action.isFollowed
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const addFriend = (userId) => ({ type: ADD_FRIEND, userId });
export const deleteFriend = (userId) => ({ type: DELETE_FRIEND, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isLoaded) => ({
  type: TOGGLE_IS_FETCHING,
  isLoaded,
});
export const toggleFollowingProgress = (isFollowed, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFollowed,
  userId,
});

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(toggleIsFetching(false));
  };
};

export const addUser = (userId) => {
  return async (dispatch) => {
    let apiMethod = usersAPI.addUser.bind(usersAPI);
    let actionCreator = addFriend;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    let apiMethod = usersAPI.deleteUser.bind(usersAPI);
    let actionCreator = deleteFriend;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};

export default usersReducer;
