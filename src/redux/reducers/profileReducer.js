import { usersAPI } from '../../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  userProfile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let date = new Date();
      let dateString = date.toLocaleDateString();
      let newPost = {
        id: 4,
        author: 'Marina Valentine',
        time: dateString,
        message: state.newPostText,
        reactions: 0,
        comments: 0,
        shares: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.userProfile };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

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
