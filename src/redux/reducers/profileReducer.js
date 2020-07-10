import { usersAPI } from '../../api/api';

const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';

let initialState = {
  userProfile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.userProfile };
    default:
      return state;
  }
};

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

export const getUser = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      debugger
      dispatch(setUserProfile(response));
    });
  };
};

export default profileReducer;
