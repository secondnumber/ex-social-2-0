import { getAuthUserData } from './authReducer';
import LoaderImage from '../../assets/Common/Preloader.svg';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

export type InitialStateType = typeof initialState;

let initialState = {
  initialized: false,
  loaderImage: LoaderImage,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
};

export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
