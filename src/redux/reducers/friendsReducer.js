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
import Avatar01 from '../../assets/FriendsPage/friends/01/ava01.png';
import BgImg02 from '../../assets/FriendsPage/friends/02/bg02.jpg';
import Avatar02 from '../../assets/FriendsPage/friends/02/ava02.png';
import BgImg03 from '../../assets/FriendsPage/friends/03/bg03.jpg';
import Avatar03 from '../../assets/FriendsPage/friends/03/ava03.png';

let initialState = {
  friendsList: {
    counter: 82,
    friends: [
      {
        id: 1,
        name: 'Neko Bebop',
        bgImg: BgImg01,
        avatar: Avatar01,
        status: 'WWW.STORE.COM/NEKOPRINTS',
        welcome:
          'Hello! I’m James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!',
        badges: [BadgeImg1, BadgeImg2, BadgeImg3, BadgeImg4],
        posts: 874,
        friends: 60,
        visits: 1235,
        social: [TwitterIcon, InstagramIcon, TwitchIcon, DiscordIcon],
      },
      {
        id: 2,
        name: 'Destroy Dex',
        bgImg: BgImg02,
        avatar: Avatar02,
        status: 'WWW.TWITCH.TV/D-DESTROYER',
        welcome:
          'Hello! I’m James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!',
        badges: [BadgeImg1, BadgeImg2, BadgeImg3, BadgeImg4],
        posts: 890,
        friends: 79,
        visits: 4685,
        social: [FacebookIcon, TwitterIcon, InstagramIcon, TwitchIcon],
      },
      {
        id: 3,
        name: 'Nick Grissom',
        bgImg: BgImg03,
        avatar: Avatar03,
        status: 'AKA PHANTOM STREAMER',
        welcome:
          'Hello! I’m James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!',
        badges: [BadgeImg1, BadgeImg2, BadgeImg3, BadgeImg4],
        posts: 874,
        friends: 60,
        visits: 1235,
        social: [TwitchIcon, TwitchIcon, YoutubeIcon],
      },
    ],
  },
};

const friendsReducer = (state = initialState, action) => {
  return state;
};

export default friendsReducer;
