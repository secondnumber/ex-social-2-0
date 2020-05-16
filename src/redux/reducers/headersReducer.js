let initialState = {
  navMenuList: [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Careers' },
    { id: 3, name: 'Faqs' },
    { id: 4, name: '...' },
  ],
  progressCount: [{ id: 1, experience: 38 }],
};

const headersReducer = (state = initialState, action) => {
  return state;
};

export default headersReducer;
