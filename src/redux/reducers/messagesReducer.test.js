import messagesReducer, { deleteMessage, sendMessage } from './messagesReducer';

let state = {
  friendsData: [
    { id: 1, name: 'Bearded Wonder' },
    { id: 2, name: 'Neko Bebop' },
    { id: 3, name: 'Nick Grissom' },
    { id: 4, name: 'Sarah Diamond' },
    { id: 5, name: 'Matt Parker' },
  ],

  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'How are you?' },
  ],
  newMessageBody: '',
};

it('length of messagesData should be incremented', () => {
  let action = sendMessage('for test');
  let newState = messagesReducer(state, action);
  expect(newState.messagesData.length).toBe(4);
});

it('new message in messagesData should be correct', () => {
  let action = sendMessage('for test');
  let newState = messagesReducer(state, action);
  expect(newState.messagesData.length).toBe(4);
  expect(newState.messagesData[3].message).toBe('for test');
});

it('after delete length of messagesData should be decremented', () => {
  let action = deleteMessage(1);
  let newState = messagesReducer(state, action);
  expect(newState.messagesData.length).toBe(2);
});

it('after delete with wrong id length of messagesData shouldnt be decremented', () => {
  let action = deleteMessage(100);
  let newState = messagesReducer(state, action);
  expect(newState.messagesData.length).toBe(3);
});