import React from 'react';
import classes from './User.module.scss';
import { NavLink } from 'react-router-dom';
import Badge01 from '../../../../assets/FriendsPage/badges/01.png';
import Badge02 from '../../../../assets/FriendsPage/badges/02.png';
import Badge03 from '../../../../assets/FriendsPage/badges/03.png';
import Badge04 from '../../../../assets/FriendsPage/badges/04.png';
import Badge05 from '../../../../assets/FriendsPage/badges/05.png';
import BadgesAll from '../../../../assets/FriendsPage/badges/allBadges.png';
import Facebook from '../../../../assets/FriendsPage/social/facebook.png';
import Twitter from '../../../../assets/FriendsPage/social/twitter.png';
import Instagram from '../../../../assets/FriendsPage/social/instagram.png';
import Twitch from '../../../../assets/FriendsPage/social/twitch.png';

const User = ({
  user,
  addUser,
  deleteUser,
  defaultAvatar,
  followingInProgress,
}) => {
  return (
    <li className={classes.item}>
      <div className={classes.header}>
        <NavLink className={classes.link} to={'/profile/' + user.id}>
          <img
            className={classes.avatar}
            src={user.photos.small != null ? user.photos.small : defaultAvatar}
            alt=""
          />
          <div className={classes.name}>{user.name}</div>
        </NavLink>
        <NavLink className={classes.link} to={'/profile/' + user.id}>
          <div>www</div>
        </NavLink>
      </div>
      <div className={classes.badges}>
        <img src={Badge01} alt="" />
        <img src={Badge02} alt="" />
        <img src={Badge03} alt="" />
        <img src={Badge04} alt="" />
        <img src={Badge05} alt="" />
        <img src={BadgesAll} alt="" />
      </div>
      <ul className={classes.stats}>
        <li className={classes.stat}>
          <span className={classes.value}>64</span>
          <span className={classes.label}>Posts</span>
        </li>
        <li className={classes.stat}>
          <span className={classes.value}>95</span>
          <span className={classes.label}>Friends</span>
        </li>
        <li className={classes.stat}>
          <span className={classes.value}>542</span>
          <span className={classes.label}>Visits</span>
        </li>
      </ul>
      <div className={classes.social}>
        <img src={Facebook} alt="" />
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
        <img src={Twitch} alt="" />
      </div>
      <div className={classes.buttons}>
        {user.followed ? (
          <button
            className={classes.button + ' ' + classes.indigo}
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            Delete Friend -
          </button>
        ) : (
          <button
            className={classes.button + ' ' + classes.indigo}
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              addUser(user.id);
            }}
          >
            Add Friend +
          </button>
        )}
        <button className={classes.button + ' ' + classes.cyan}>
          Send message
        </button>
      </div>
    </li>
  );
};

export default User;
