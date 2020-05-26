import React from 'react';
import classes from './Friends.module.scss';
import Friend from './Friend/Friend';
import * as axios from 'axios';
import defaultAvatar from '../../../assets/FriendsPage/friends/01/ava01.png'

const Friends = (props) => {
  let getUsers = () => {
    if (props.friends.users.length === 0) {
      debugger;
      axios
          .get('https://social-network.samuraijs.com/api/1.0/users')
          .then((response) => {
            props.setUsers(response.data.items);
          });
    }
  };

  let deleteFriend = (userId) => {
    props.deleteFriend(userId);
  };

  let addFriend = (userId) => {
    props.addFriend(userId);
  };

  console.log(props.friends);

  let friendsList = props.friends.users.map((element) => {
    debugger;
    return (

      <Friend
        key={element.id}
        id={element.id}
        followed={element.followed}
        name={element.name}
        avatar={element.photos.small}
        defaultAvatar={defaultAvatar}
        addFriend={addFriend}
        deleteFriend={deleteFriend}
      />
    );
  });
  return (
    <div className={classes.wrapper}>
      <button onClick={getUsers}>Get users</button>
      <ul className={classes.list}>{friendsList}</ul>
    </div>
  );
};

export default Friends;
