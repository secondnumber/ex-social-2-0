import React from 'react';
import classes from './AccountInfo.module.scss';
import ProfileMenu from './ProfileMenu/ProfileMenu';

type PropsType = {
    id: number
    name: string
    description: string
}

const AccountInfo: React.FC<PropsType> = ({ id, name, description }) => {
    return (
    <li className={classes.item}>
      <h3 className={classes.header}>{name}</h3>
      <p className={classes.text}>{description}</p>
      <ul className={classes.listInner}>
        {id === 1 && (
          <ul className={classes.listInner}><ProfileMenu /></ul>
        )}
      </ul>
    </li>
  );
};

export default AccountInfo;
