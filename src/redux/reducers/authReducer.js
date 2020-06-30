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
        id: action.id,
        login: action.login,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  id,
  email,
  login,
});

export const getAuthUserData = () => (dispatch) => {
  authAPI.isAuthCurrentUser().then((response) => {
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispatch(setAuthUserData(id, email, login));
      console.log(id, email, login);
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(response.data));
    }
  });
};

export default authReducer;
