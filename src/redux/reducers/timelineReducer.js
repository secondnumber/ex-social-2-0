import { profileAPI } from '../../api/api';
import avatarSmall from '../../assets/TimelinePage/avatar.png';

const ADD_POST = 'ADD-POST';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  status: '',
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
  ],
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let date = new Date();
      let dateString = date.toLocaleDateString();
      let newPost = {
        id: 4,
        author: 'Marina Valentine',
        avatar: avatarSmall,
        time: dateString,
        message: action.message,
        reactions: 0,
        comments: 0,
        shares: 0,
      };
      state.postsData.unshift(newPost);
      return { ...state };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPost = (message) => ({
  type: ADD_POST,
  message,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default timelineReducer;
