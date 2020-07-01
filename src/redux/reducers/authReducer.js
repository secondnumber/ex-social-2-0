import { authAPI } from '../../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
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
        ...action.payload,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login },
  isAuth,
});

export const getAuthUserData = () => (dispatch) => {
  authAPI.isAuthCurrentUser().then((response) => {
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispatch(setAuthUserData(id, email, login, true));
      console.log(id, email, login);
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.loginUser(email, password, rememberMe).then((response) => {
    if (response.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logoutUser().then((response) => {
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
