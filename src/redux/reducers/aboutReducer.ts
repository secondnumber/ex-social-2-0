export type InitialStateType = typeof initialState;

type AboutType = {
  id: number
  option: string
  value: string
};

let initialState = {
  title: 'About me' as string,
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
  ] as Array<AboutType>,
};

const aboutReducer = (state = initialState, action: any): InitialStateType => {
  return state;
};

export default aboutReducer;
