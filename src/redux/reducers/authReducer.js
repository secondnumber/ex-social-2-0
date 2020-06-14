import { authAPI } from '../../api/api';

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
        login: action.login,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (login) => ({
  type: SET_USER_DATA,
  login,
});

export const setAuthThunk = () => {
  return (dispatch) => {
    authAPI.isAuthCurrentUser().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setAuthUserData(response.data.login));
      }
    });
  };
};

export default authReducer;
