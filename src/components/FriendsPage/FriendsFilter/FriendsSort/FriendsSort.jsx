import React from 'react';
import classes from './FriendsSort.module.scss';

const FriendsSort = (props) => {
  return (
    <li>
      <a href={props.link} className={classes.item}>
      {props.name}
      </a>
    </li>
  );
};

export default FriendsSort;
