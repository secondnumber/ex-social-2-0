import BigViewIcon from '../../assets/FriendsPage/sort/BigViewIcon.png';
import SmallViewIcon from '../../assets/FriendsPage/sort/SmallViewIcon.png';
import ListViewIcon from '../../assets/FriendsPage/sort/ListViewIcon.png';

let initialState = {
  sortList: [
    { id: 1, name: 'Recently Active' },
    { id: 2, name: 'Newest Friends' },
    { id: 3, name: 'Alphabetical' },
  ],

  viewList: [
    { id: 1, icon: BigViewIcon },
    { id: 2, icon: SmallViewIcon },
    { id: 3, icon: ListViewIcon },
  ],
};

const friendsFilterReducer = (state = initialState, action) => {
  return state;
};

export default friendsFilterReducer;
