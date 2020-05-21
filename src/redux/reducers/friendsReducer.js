import BadgeImg1 from '../../assets/FriendsPage/badges/01.png';
import BadgeImg2 from '../../assets/FriendsPage/badges/02.png';
import BadgeImg3 from '../../assets/FriendsPage/badges/03.png';
import BadgeImg4 from '../../assets/FriendsPage/badges/04.png';
import InstagramIcon from '../../assets/FriendsPage/social/instagram.png';
import DiscordIcon from '../../assets/FriendsPage/social/discord.png';
import PatreonIcon from '../../assets/FriendsPage/social/patreon.png';
import YoutubeIcon from '../../assets/FriendsPage/social/youtube.png';
import TwitchIcon from '../../assets/FriendsPage/social/twitch.png';
import TwitterIcon from '../../assets/FriendsPage/social/twitter.png';
import FacebookIcon from '../../assets/FriendsPage/social/facebook.png';
import BgImg01 from '../../assets/FriendsPage/friends/01/bg01.jpg';
import BgImg02 from '../../assets/FriendsPage/friends/02/bg02.jpg';
import BgImg03 from '../../assets/FriendsPage/friends/03/bg03.jpg';
import BgImg04 from '../../assets/FriendsPage/friends/04/bg04.jpg';
import BgImg05 from '../../assets/FriendsPage/friends/05/bg05.jpg';
import BgImg06 from '../../assets/FriendsPage/friends/06/bg06.jpg';
import Avatar01 from '../../assets/FriendsPage/friends/01/ava01.png';
import Avatar02 from '../../assets/FriendsPage/friends/02/ava02.png';
import Avatar03 from '../../assets/FriendsPage/friends/03/ava03.png';
import Avatar04 from '../../assets/FriendsPage/friends/04/ava04.png';
import Avatar05 from '../../assets/FriendsPage/friends/05/ava05.png';
import Avatar06 from '../../assets/FriendsPage/friends/06/ava06.png';

const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      name: 'Neko Bebop',
      bgImg: BgImg01,
      avatar: Avatar01,
      status: 'WWW.STORE.COM/NEKOPRINTS',
      welcome:
        'Hello! I’m James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!',
      badges: [BadgeImg1, BadgeImg2, BadgeImg3, BadgeImg4],
      posts: 874,
      friends: 60,
      visits: 11235,
      social: [TwitterIcon, InstagramIcon, TwitchIcon, DiscordIcon],
    },
    {
      id: 2,
      followed: true,
      name: 'Destroy Dex',
      bgImg: BgImg02,
      avatar: Avatar02,
      status: 'WWW.TWITCH.TV/D-DESTROYER',
      welcome:
        'Hello! I’m James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!',
      badges: [BadgeImg1, BadgeImg2, BadgeImg3, BadgeImg4],
      posts: 890,
      friends: 79,
      visits: 14685,
      social: [FacebookIcon, TwitterIcon, InstagramIcon, TwitchIcon],
    },
    {
      id: 3,
      followed: false,
      name: 'Nick Grissom',
      bgImg: BgImg03,
      avatar: Avatar03,
      status: 'AKA PHANTOM STREAMER',
      welcome:
        'Hello! I’m James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!',
      badges: [BadgeImg1, BadgeImg2, BadgeImg3, BadgeImg4],
      posts: 874,
      friends: 60,
      visits: 10235,
      social: [TwitchIcon, TwitchIcon, YoutubeIcon],
    },
    {
      id: 4,
      followed: true,
      name: 'Sarah Diamond',
      bgImg: BgImg04,
      avatar: Avatar04,
      status: 'WWW.DIAMONDART.COM',
      welcome:
        'Hello! I’m James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!',
      badges: [BadgeImg1, BadgeImg2, BadgeImg3, BadgeImg4],
      posts: 1046,
      friends: 107,
      visits: 12105,
      social: [TwitterIcon, InstagramIcon, PatreonIcon],
    },
    {
      id: 5,
      followed: false,
      name: 'Bearded Wonder',
      bgImg: BgImg05,
      avatar: Avatar05,
      status: 'AKA JACK PARKER',
      welcome:
        'Hello! I’m James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!',
      badges: [BadgeImg1, BadgeImg2, BadgeImg3, BadgeImg4],
      posts: 97,
      friends: 44,
      visits: 608,
      social: [TwitterIcon, TwitchIcon, YoutubeIcon, DiscordIcon],
    },
    {
      id: 6,
      followed: true,
      name: 'The Green Goo',
      bgImg: BgImg06,
      avatar: Avatar06,
      status: 'WWW.GGPRINTS.COM',
      welcome:
        'Hello! I’m James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!',
      badges: [BadgeImg1, BadgeImg2, BadgeImg3, BadgeImg4],
      posts: 28,
      friends: 53,
      visits: 901,
      social: [FacebookIcon, TwitchIcon, TwitchIcon],
    },
  ],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND: {
      console.log('add' + action.userId);
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case DELETE_FRIEND: {
      console.log('delete' + action.userId);
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const addFriendAC = (userId) => ({ type: ADD_FRIEND, userId });
export const deleteFriendAC = (userId) => ({ type: DELETE_FRIEND, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default friendsReducer;
