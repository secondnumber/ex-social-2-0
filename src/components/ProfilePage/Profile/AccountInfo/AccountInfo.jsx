import React from 'react';
import classes from './AccountInfo.module.scss';

const AccountInfo = (props) => (
  <li className={classes.item}>
    <h3 className={classes.header}>{props.name}</h3>
    <p className={classes.text}>{props.description}</p>
      <ul className={classes.listInner}>

      </ul>
  </li>
);

export default AccountInfo;
