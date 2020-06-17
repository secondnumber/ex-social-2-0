let initialState = {
  title: 'About me',
  status: 'Hi! My name is Marina but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.',
  infoList: [
    {
      id: 1,
      option: 'Joined',
      value: 'March 26th, 2017',
    },
    {
      id: 2,
      option: 'City',
      value: 'Los Angeles, California',
    },
    {
      id: 3,
      option: 'Country',
      value: 'United States',
    },
    {
      id: 4,
      option: 'Age',
      value: 32,
    },
    {
      id: 5,
      option: 'Web',
      value: 'www.gamehuntress.com',
    },
  ],
};

const aboutReducer = (state = initialState, action) => {
  return state;
};

export default aboutReducer;
