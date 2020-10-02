import { profileAPI } from '../../api/usersApi';
import avatarSmall from '../../assets/TimelinePage/avatar.png';
import {PostsDataType} from "../../types";

const ADD_POST = 'timeline/ADD-POST';
const SET_STATUS = 'timeline/SET_STATUS';

export type InitialStateType = typeof initialState;

let initialState = {
  status: '' as string,
  postsData: [
    {
      id: 1,
      author: 'Marina Valentine',
      avatarImg: avatarSmall,
      time: '29 minutes ago',
      message:
        'Hi to all! Remembercomments that today I\'ll be livestreaming along with @NekoBebop the new character of the brand new Xenowatch patch "Anya Darkness". See you there!',
      reactions: 15,
      comments: 1,
      shares: 1,
    },
    {
      id: 2,
      author: 'Marina Valentine',
      avatarImg: avatarSmall,
      time: '17 hours ago',
      message: 'This is a dream come true, thanks to all for the support!!!',
      reactions: 21,
      comments: 4,
      shares: 3,
    },
    {
      id: 3,
      author: 'Marina Valentine',
      avatarImg: avatarSmall,
      time: '2 days ago',
      message:
        "Here's a sneak peek of the official box cover art for Machine Wasteland II! Remember that I'll be having a stream showing a preview tommorrow at 9PM PCT!",
      reactions: 9,
      comments: 0,
      shares: 0,
    },
  ] as Array<PostsDataType>,
};

const timelineReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let date = new Date();
      let dateString = date.toLocaleDateString();
      let newPost = {
        id: 4,
        author: 'Marina Valentine',
        time: dateString,
        message: action.message,
        reactions: 0,
        comments: 0,
        shares: 0,
      } as PostsDataType;
      state.postsData.unshift(newPost);
      return { ...state };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

type AddPostActionType = {
  type: typeof ADD_POST
  message: string
}

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}

export const addPost = (message: string): AddPostActionType => ({
  type: ADD_POST,
  message,
});

export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default timelineReducer;
