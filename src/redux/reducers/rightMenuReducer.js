import SmallProfileIcon from '../../assets/LeftMenu/icons/SmallProfileInfo.png';

let initialState = {
  iconsList: [
    { id: 1, icon: SmallProfileIcon },
    { id: 2, icon: SmallProfileIcon },
    { id: 3, icon: SmallProfileIcon },
    { id: 4, icon: SmallProfileIcon },
    { id: 5, icon: SmallProfileIcon },
    { id: 6, icon: SmallProfileIcon },
    { id: 7, icon: SmallProfileIcon },
  ],
};

const rightMenuReducer = (state = initialState, action) => {
  return state;
};

export default rightMenuReducer;
