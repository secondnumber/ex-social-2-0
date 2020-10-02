import SmallProfileIcon from '../../assets/LeftMenu/icons/SmallProfileInfo.png';
import BagesIcon from '../../assets/LeftMenu/icons/BadgesIcon.png';
import EventsIcon from '../../assets/LeftMenu/icons/EventsIcon.png';
import ForumsIcon from '../../assets/LeftMenu/icons/ForumsIcon.png';
import GroupsIcon from '../../assets/LeftMenu/icons/GroupsIcon.png';
import MarketplaceIcon from '../../assets/LeftMenu/icons/MarketplaceIcon.png';
import MembersIcon from '../../assets/LeftMenu/icons/MembersIcon.png';
import NewsfeedIcon from '../../assets/LeftMenu/icons/NewsfeedIcon.png';
import OverviewIcon from '../../assets/LeftMenu/icons/OverviewIcon.png';
import QuestsIcon from '../../assets/LeftMenu/icons/QuestsIcon.png';
import StreamsIcon from '../../assets/LeftMenu/icons/StreamsIcon.png';

export type InitialStateType = typeof initialState;

type IconsListType = {
  id: number
  icon: any
}

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
  ] as Array<IconsListType>,
};

const leftMenuReducer = (state = initialState, action: any): InitialStateType => {
  return state;
};

export default leftMenuReducer;
