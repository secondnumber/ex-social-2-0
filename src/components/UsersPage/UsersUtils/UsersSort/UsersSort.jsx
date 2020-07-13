import React from 'react';
import classes from './UsersSort.module.scss';

const UsersSort = (props) => {
  return (
    <li>
      <a href={props.link} className={classes.item}>
      {props.name}
      </a>
    </li>
  );
};

export default UsersSort;
