import React from 'react';
import * as axios from 'axios';
import classes from './Friends.module.scss';

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
        console.log(this.props.friends.users);
      });
  }
  render() {
    return (
      <div className={classes.wrapper}>
        <ul className={classes.list}>
          {this.props.friends.users.map((el) => {
            return (
              <li className={classes.item}>
                <img
                  src={el.avatar != null ? el.avatar : this.props.defaultAvatar}
                  alt=""
                />
                <div>{el.name}</div>
                <div>
                  {el.followed ? (
                    <button
                      onClick={(userId) => {
                        this.props.deleteFriend(el.id);
                      }}
                    >
                      Delete Friend -
                    </button>
                  ) : (
                    <button
                      onClick={(userId) => {
                        this.props.addFriend(el.id);
                      }}
                    >
                      Add Friend +
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
