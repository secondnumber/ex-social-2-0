import Avatar from '../../assets/FriendsPage/avatar.png';
import Flag from '../../assets/FriendsPage/flag.png';
import Facebook from '../../assets/FriendsPage/social/facebook.png';
import Twitter from '../../assets/FriendsPage/social/twitter.png';
import Instagram from '../../assets/FriendsPage/social/instagram.png';
import Twitch from '../../assets/FriendsPage/social/twitch.png';
import Youtube from '../../assets/FriendsPage/social/youtube.png';
import Patreon from '../../assets/FriendsPage/social/patreon.png';
import Discord from '../../assets/FriendsPage/social/discord.png';

let initialState = {
  bannerBigAvatar: Avatar,
  bannerBigName: 'Marina Valentine',
  bannerBigStatus: 'WWW.GAMEHUNTRESS.COM',
  bannerBigStats: [
    { id: 1, value: 930, label: 'posts' },
    { id: 2, value: 82, label: 'friends' },
    { id: 3, value: 5.7, label: 'visits' },
  ],
  bannerBigSocial: [
    { id: 1, name: Facebook, hint: 'Facebook' },
    { id: 2, name: Twitter, hint: 'Twitter' },
    { id: 3, name: Instagram, hint: 'Instagram' },
    { id: 4, name: Twitch, hint: 'Twitch' },
    { id: 5, name: Youtube, hint: 'Youtube' },
    { id: 6, name: Patreon, hint: 'Patreon' },
    { id: 7, name: Discord, hint: 'Discord' },
  ],
};

const bannerReducer = (state = initialState, action) => {
  return state;
};

export default bannerReducer;
