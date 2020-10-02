import SmallProfileIcon from '../../assets/LeftMenu/icons/SmallProfileInfo.png';

export type InitialStateType = typeof initialState;

type IconsListType = {
  id: number
  icon: any
}

let initialState = {
  iconsList: [
    { id: 1, icon: SmallProfileIcon },
    { id: 2, icon: SmallProfileIcon },
    { id: 3, icon: SmallProfileIcon },
    { id: 4, icon: SmallProfileIcon },
    { id: 5, icon: SmallProfileIcon },
    { id: 6, icon: SmallProfileIcon },
    { id: 7, icon: SmallProfileIcon },
  ] as Array<IconsListType>,
};

const rightMenuReducer = (state = initialState, action: any): InitialStateType => {
  return state;
};

export default rightMenuReducer;
