import DefaultAvatar from '../../assets/FriendsPage/avatar.png';
import { profileAPI, usersAPI } from '../../api/usersApi';

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
      return { ...state, userProfile: { ...state.userProfile, photos: action.photos } };
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

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.photos));
  }
};

export default profileReducer;
