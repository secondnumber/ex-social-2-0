import DefaultAvatar from '../../assets/FriendsPage/friendAvatar.png';
import { usersAPI } from '../../api/usersApi';
import { updateObjectsInArray } from '../../utils/objectsHelper';
import {UserType} from "../../types";

const ADD_FRIEND = 'users/ADD_FRIEND';
const DELETE_FRIEND = 'users/DELETE_FRIEND';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

export type InitialStateType = typeof initialState;

let initialState = {
  usersList: [] as Array<UserType>,
  defaultAvatar: DefaultAvatar,
  pageSize: 9,
  totalUsersCount: 0,
  currentPage: 1,
  isFollowed: true,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users ids
};

let usersReducer;
usersReducer = (state = initialState, action: any): InitialStateType => {
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
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

type AddFriendActionType = {
  type: typeof ADD_FRIEND
  userId: number
};

type DeleteFriendActionType = {
  type: typeof DELETE_FRIEND
  userId: number
};

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
};

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  pageNumber: number
};

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
};

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isLoaded: boolean
};

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFollowed: boolean
  userId: number
};

export const addFriend = (userId: number): AddFriendActionType => ({ type: ADD_FRIEND, userId });
export const deleteFriend = (userId: number): DeleteFriendActionType => ({ type: DELETE_FRIEND, userId });
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isLoaded: boolean): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isLoaded,
});
export const toggleFollowingProgress = (isFollowed: boolean, userId: number): ToggleFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFollowed,
  userId,
});

export const requestUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(toggleIsFetching(false));
  };
};

export const addUser = (userId: number) => {
  return async (dispatch: any) => {
    let apiMethod = usersAPI.addUser.bind(usersAPI);
    let actionCreator = addFriend;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};

export const deleteUser = (userId: number) => {
  return async (dispatch: any) => {
    let apiMethod = usersAPI.deleteUser.bind(usersAPI);
    let actionCreator = deleteFriend;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
};

export default usersReducer;
