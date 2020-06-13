import {usersAPI} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId) => ({
  type: SET_USER_DATA,
  userId,
});

export const setAuthThunk = () => {
  return (dispatch) => {
    usersAPI.isAuthCurrentUser().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data.id));
      }
    });
  }
}

export default authReducer;
