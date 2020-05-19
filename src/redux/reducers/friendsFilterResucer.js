import BigViewIcon from '../../assets/FriendsPage/sort/BigViewIcon.png';
import SmallViewIcon from '../../assets/FriendsPage/sort/SmallViewIcon.png';
import ListViewIcon from '../../assets/FriendsPage/sort/ListViewIcon.png';

let initialState = {
  sortList: [
    { id: 1, name: 'Recently Active', link: '#' },
    { id: 2, name: 'Newest Friends', link: '#' },
    { id: 3, name: 'Alphabetical', link: '#' },
  ],

  viewList: [
    { id: 1, icon: BigViewIcon, link: '#' },
    { id: 2, icon: SmallViewIcon, link: '#' },
    { id: 3, icon: ListViewIcon, link: '#' },
  ],
};

const friendsFilterReducer = (state = initialState, action) => {
  return state;
};

export default friendsFilterReducer;
