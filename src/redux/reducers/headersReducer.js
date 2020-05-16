let initialState = {
  navMenuList: [
    { id: 1, name: 'Account', link: '/profile' },
    { id: 2, name: 'Friends', link: '/friends' },
    { id: 3, name: 'Faqs' },
    { id: 4, name: '...' },
  ],
  progressCount: [{ id: 1, experience: 38 }],
};

const headersReducer = (state = initialState, action) => {
  return state;
};

export default headersReducer;
