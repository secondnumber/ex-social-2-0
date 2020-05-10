import SmallProfileIcon from '../components/ProfilePage/LeftMenu/icons/SmallProfileInfo.png';
import BagesIcon from '../components/ProfilePage/LeftMenu/icons/BadgesIcon.png';
import EventsIcon from '../components/ProfilePage/LeftMenu/icons/EventsIcon.png';
import ForumsIcon from '../components/ProfilePage/LeftMenu/icons/ForumsIcon.png';
import GroupsIcon from '../components/ProfilePage/LeftMenu/icons/GroupsIcon.png';
import MarketplaceIcon from '../components/ProfilePage/LeftMenu/icons/MarketplaceIcon.png';
import MembersIcon from '../components/ProfilePage/LeftMenu/icons/MembersIcon.png';
import NewsfeedIcon from '../components/ProfilePage/LeftMenu/icons/NewsfeedIcon.png';
import OverviewIcon from '../components/ProfilePage/LeftMenu/icons/OverviewIcon.png';
import QuestsIcon from '../components/ProfilePage/LeftMenu/icons/QuestsIcon.png';
import StreamsIcon from '../components/ProfilePage/LeftMenu/icons/StreamsIcon.png';

let initialState = {
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
};

const leftMenuReducer = (state = initialState, action) => {
  return state;
};

export default leftMenuReducer;
