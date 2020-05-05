import React from 'react';
import classes from './AccountInfo.module.scss';
import ProfileMenu from './ProfileMenu/ProfileMenu';

const AccountInfo = (props) => {
  let menuId = props.id;

  return (
    <li className={classes.item}>
      <h3 className={classes.header}>{props.name}</h3>
      <p className={classes.text}>{props.description}</p>
      <ul className={classes.listInner}>
        {menuId === 1 && (
          <ul className={classes.listInner}><ProfileMenu /></ul>
        )}
      </ul>
    </li>
  );
};

export default AccountInfo;
