import DefaultAvatar from '../../assets/FriendsPage/avatar.png';
import { profileAPI, usersAPI } from '../../api/usersApi';
import { stopSubmit } from 'redux-form';
import {PhotosType, UserProfileType} from "../../types";

const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

export type InitialStateType = typeof initialState;

let initialState = {
  defaultAvatar: DefaultAvatar as any,
  userProfile: null as null | UserProfileType,
};

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return { ...state, userProfile: action.userProfile };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos } as UserProfileType,
      };
    }
    default:
      return state;
  }
};

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  userProfile: UserProfileType
}

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}

export const setUserProfile = (userProfile: UserProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUser = (userId: number) => {
  return async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response));
  };
};

export const savePhoto = (file: any) => {
  return async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file);
    console.log(response);
    if (response.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos));
    }
  };
};

export const saveProfile = (profile: any) => {
  return async (dispatch: any, getState: Function) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    console.log(response);
    if (response.resultCode === 0) {
      dispatch(getUser(userId));
    } else {
      let message =
        response.messages.length > 0
          ? response.messages[0]
          : 'Wrong value';
      let action = stopSubmit('edit-profile', { _error: message});
      dispatch(action);
      return Promise.reject(message);
    }
  };
};

export default profileReducer;
