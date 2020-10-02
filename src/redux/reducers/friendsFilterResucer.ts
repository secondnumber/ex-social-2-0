import BigViewIcon from '../../assets/FriendsPage/sort/BigViewIcon.png';
import SmallViewIcon from '../../assets/FriendsPage/sort/SmallViewIcon.png';
import ListViewIcon from '../../assets/FriendsPage/sort/ListViewIcon.png';

export type InitialStateType = typeof initialState;

type SortListType = {
  id: number
  name: string
  link: string
};

type ViewListType = {
  id: number
  icon: any
  link: string
};

let initialState = {
  sortList: [
    { id: 1, name: 'Recently Active', link: '#' },
    { id: 2, name: 'Newest Friends', link: '#' },
    { id: 3, name: 'Alphabetical', link: '#' },
  ] as Array<SortListType>,

  viewList: [
    { id: 1, icon: BigViewIcon, link: '#' },
    { id: 2, icon: SmallViewIcon, link: '#' },
    { id: 3, icon: ListViewIcon, link: '#' },
  ] as Array<ViewListType>,
};

const friendsFilterReducer = (state = initialState, action: any): InitialStateType => {
  return state;
};

export default friendsFilterReducer;
