export type InitialStateType = typeof initialState;

type NavMenuListType = {
  id: number
  name: string
  link: string
}

type ProgressCountType = {
  id: number
  experience: number
}

let initialState = {
  navMenuList: [
    { id: 1, name: 'Timeline', link: '/timeline' },
    { id: 2, name: 'Users', link: '/users' },
    { id: 3, name: 'Account', link: '/account' },
    { id: 4, name: 'Profile', link: '/profile' },
  ] as Array<NavMenuListType>,
  progressCount: [{ id: 1, experience: 38 }] as Array<ProgressCountType>,
};

const headersReducer = (state = initialState, action: any): InitialStateType => {
  return state;
};

export default headersReducer;
