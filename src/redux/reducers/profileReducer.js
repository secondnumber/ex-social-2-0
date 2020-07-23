import DefaultAvatar from '../../assets/FriendsPage/avatar.png';
import { profileAPI, usersAPI } from '../../api/usersApi';
import { stopSubmit } from 'redux-form';

const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

let initialState = {
  defaultAvatar: DefaultAvatar,
  userProfile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return { ...state, userProfile: action.userProfile };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUser = (userId) => {
  return async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response));
  };
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    console.log(response);
    if (response.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos));
    }
  };
};

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
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
