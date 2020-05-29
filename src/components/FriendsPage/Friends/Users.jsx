import React from 'react';
import * as axios from 'axios';
import classes from './Users.module.scss';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios
          .get(
              `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
          )
          .then((response) => {
              this.props.setUsers(response.data.items);
              this.props.setTotalUsersCount(response.data.items);
          });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div className={classes.wrapper}>
        <div>
          {pages.map((page) => (
            <span
              className={
                this.props.currentPage === page
                  ? classes.selectedPage
                  : classes.pageNumber
              }
              onClick={(event) => {
                this.onPageChanged(page);
              }}
            >
              {page}
            </span>
          ))}
        </div>
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
        <div></div>
      </div>
    );
  }
}

export default Users;
