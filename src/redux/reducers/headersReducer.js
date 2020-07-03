let initialState = {
  navMenuList: [
    { id: 1, name: 'Timeline', link: '/timeline' },
    { id: 2, name: 'Friends', link: '/friends' },
    { id: 3, name: 'Account', link: '/account' },
    { id: 4, name: 'Profile', link: '/profile' },
  ],
  progressCount: [{ id: 1, experience: 38 }],
};

const headersReducer = (state = initialState, action) => {
  return state;
};

export default headersReducer;
