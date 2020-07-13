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
    { id: 1, icon: AboutIcon, link: '/about' },
    { id: 2, icon: TimelineIcon, link: '/timeline' },
    { id: 3, icon: FriendsIcon, link: '/friends'},
    { id: 4, icon: GroupsIcon, link: '/groups' },
    { id: 5, icon: PhotosIcon, link: '/photos' },
    { id: 6, icon: VideosIcon, link: '/movies' },
    { id: 7, icon: BadgesIcon, link: '/badges' },
    { id: 8, icon: StreamsIcon, link: '/streams' },
    { id: 9, icon: BlogIcon, link: '/blog' },
  ],
};

const innerMenuReducer = (state = initialState, action) => {
  return state;
};

export default innerMenuReducer;
