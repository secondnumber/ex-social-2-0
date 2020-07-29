import { authAPI, securityAPI } from '../../api/usersApi';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.url,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getCaptchaUrl = (url) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  url,
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.isAuthCurrentUser();
  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (
  dispatch
) => {
  const response = await authAPI.loginUser(
    email,
    password,
    rememberMe,
    captcha
  );
  console.log(response.resultCode);
  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.resultCode === 10) {
      let message =
        response.messages.length > 0
          ? response.messages[0]
          : 'Email or Password is wrong';
      let action = stopSubmit('login', { _error: message });
      dispatch(action);
      dispatch(getCaptcha());
    } else {
      let message =
        response.messages.length > 0
          ? response.messages[0]
          : 'Email or Password is wrong';
      let action = stopSubmit('login', { _error: message });
      dispatch(action);
    }
  }
};

export const getCaptcha = () => async (dispatch) => {
  const response = await securityAPI.getCaptcha();
  const captchaUrl = response.url;
  dispatch(getCaptchaUrl(captchaUrl));
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logoutUser();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
