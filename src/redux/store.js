import SmallProfileIcon from '../assets/LeftMenu/icons/SmallProfileInfo.png';
import BagesIcon from '../assets/LeftMenu/icons/BadgesIcon.png';
import EventsIcon from '../assets/LeftMenu/icons/EventsIcon.png';
import ForumsIcon from '../assets/LeftMenu/icons/ForumsIcon.png';
import GroupsIcon from '../assets/LeftMenu/icons/GroupsIcon.png';
import MarketplaceIcon from '../assets/LeftMenu/icons/MarketplaceIcon.png';
import MembersIcon from '../assets/LeftMenu/icons/MembersIcon.png';
import NewsfeedIcon from '../assets/LeftMenu/icons/NewsfeedIcon.png';
import OverviewIcon from '../assets/LeftMenu/icons/OverviewIcon.png';
import QuestsIcon from '../assets/LeftMenu/icons/QuestsIcon.png';
import StreamsIcon from '../assets/LeftMenu/icons/StreamsIcon.png';
import messagesReducer from './reducers/messagesReducer';
import timelineReducer from './reducers/timelineReducer';

let store = {
  _state: {
    headerData: {
      navMenuList: [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Careers' },
        { id: 3, name: 'Faqs' },
        { id: 4, name: '...' },
      ],
      progressCount: [{ id: 1, experience: 38 }],
    },
    leftMenuData: {
      iconsList: [
        { id: 1, icon: SmallProfileIcon },
        { id: 2, icon: BagesIcon },
        { id: 3, icon: EventsIcon },
        { id: 4, icon: ForumsIcon },
        { id: 5, icon: GroupsIcon },
        { id: 6, icon: MarketplaceIcon },
        { id: 7, icon: MembersIcon },
        { id: 8, icon: NewsfeedIcon },
        { id: 9, icon: OverviewIcon },
        { id: 10, icon: QuestsIcon },
        { id: 11, icon: StreamsIcon },
      ],
    },
    rightMenuData: {
      iconsList: [
        { id: 1, icon: SmallProfileIcon },
        { id: 2, icon: SmallProfileIcon },
        { id: 3, icon: SmallProfileIcon },
        { id: 4, icon: SmallProfileIcon },
        { id: 5, icon: SmallProfileIcon },
        { id: 6, icon: SmallProfileIcon },
        { id: 7, icon: SmallProfileIcon },
      ],
    },
    accountInfoData: {
      accountInfoList: [
        {
          id: 1,
          name: 'My Profile',
          description:
            'Change your avatar and cover, accept friends, read messages and more!',
          profileMenuList: [
            { id: 1, name: 'Timeline', link: '/timeline' },
            { id: 2, name: 'Profile Info', link: '/profile_info' },
            { id: 3, name: 'Social and Stream', link: '/social_and_stream' },
            { id: 4, name: 'Notifications', link: '/notifications' },
            { id: 5, name: 'Messages', link: '/dialogs' },
            { id: 6, name: 'Friend Requests', link: '/friend_requests' },
          ],
        },
        {
          id: 2,
          name: 'Account',
          description:
            'Change settings, configure notifications, and review your privacy',
        },
        {
          id: 3,
          name: 'Groups',
          description:
            'Create new groups, manage the ones you created or accept invites!',
        },
        {
          id: 4,
          name: 'My Store',
          description:
            'Review your account, manage products check stats and much more!',
        },
      ],
    },
    timeline: {
      postsData: [
        {
          id: 1,
          author: 'Marina Valentine',
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
          time: '17 hours ago',
          message:
            'This is a dream come true, thanks to all for the support!!!',
          reactions: 21,
          comments: 4,
          shares: 3,
        },
        {
          id: 3,
          author: 'Marina Valentine',
          time: '2 days ago',
          message:
            "Here's a sneak peek of the official box cover art for Machine Wasteland II! Remember that I'll be having a stream showing a preview tommorrow at 9PM PCT!",
          reactions: 9,
          comments: 0,
          shares: 0,
        },
      ],
      newPostText: 'new',
    },
    messages: {
      friendsData: [
        { id: 1, name: 'Bearded Wonder' },
        { id: 2, name: 'Neko Bebop' },
        { id: 3, name: 'Nick Grissom' },
        { id: 4, name: 'Sarah Diamond' },
        { id: 5, name: 'Matt Parker' },
      ],

      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you?' },
      ],
      newMessageBody: 'newMsg',
    },
  },

  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.timeline = timelineReducer(this._state.timeline, action);
    this._state.messages = messagesReducer(this._state.messages, action);
    this._callSubscriber(this._state);
  },
};

export default store;
