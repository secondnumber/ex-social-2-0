import React from 'react';
import classes from './FriendsView.module.scss';

const FriendsView = (props) => {
  return (
    <li>
      <a href={props.link} className={classes.item}>
        <img src={props.icon} alt=""/>
      </a>
    </li>
  );
};

export default FriendsView;
