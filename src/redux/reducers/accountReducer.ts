import {AccountInfoListType, ProfileMenuListType} from "../../types";

export type InitialStateType = typeof initialState;

let initialState = {
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
      ] as Array<ProfileMenuListType>,
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
  ] as Array<AccountInfoListType>,
};

const accountReducer = (state = initialState, action: any): InitialStateType => {
  return state;
};

export default accountReducer;
