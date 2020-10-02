import { authAPI, securityAPI } from '../../api/usersApi';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType = typeof initialState;

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean | false,
  isFetching: false as boolean | false,
  captchaUrl: null as string | null,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetAuthUserDataPayloadType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataPayloadType
}

export const setAuthUserData = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

type GetCaptchaUrlActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl: string }
}

export const getCaptchaUrl = (captchaUrl: string): GetCaptchaUrlActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
  const response = await authAPI.isAuthCurrentUser();
  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (
  dispatch: any
) => {
  const response = await authAPI.loginUser(
    email,
    password,
    rememberMe,
    captcha
  );
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

export const getCaptcha = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptcha();
  const captchaUrl = response.url;
  dispatch(getCaptchaUrl(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logoutUser();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
