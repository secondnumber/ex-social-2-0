import AboutIcon from '../../assets/InnerMenu/icons/aboutIcon.png';
import TimelineIcon from '../../assets/InnerMenu/icons/timelineIcon.png';
import FriendsIcon from '../../assets/InnerMenu/icons/friendsIcon.png';
import GroupsIcon from '../../assets/InnerMenu/icons/groupsIcon.png';
import PhotosIcon from '../../assets/InnerMenu/icons/photosIcon.png';
import VideosIcon from '../../assets/InnerMenu/icons/videosIcon.png';
import BadgesIcon from '../../assets/InnerMenu/icons/badgesIcon.png';
import StreamsIcon from '../../assets/InnerMenu/icons/timelineIcon.png';
import BlogIcon from '../../assets/InnerMenu/icons/blogPostsIcon.png';

let initialState = {
  innerMenuList: [
    { id: 1, icon: AboutIcon },
    { id: 2, icon: TimelineIcon },
    { id: 3, icon: FriendsIcon },
    { id: 4, icon: GroupsIcon },
    { id: 5, icon: PhotosIcon },
    { id: 6, icon: VideosIcon },
    { id: 7, icon: BadgesIcon },
    { id: 8, icon: StreamsIcon },
    { id: 9, icon: BlogIcon },
  ],
};

const innerMenuReducer = (state = initialState, action) => {
  return state;
};

export default innerMenuReducer;
