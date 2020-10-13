import React from 'react';
import classes from './AccountInfo.module.scss';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import {ProfileMenuListType} from '../../../../types';

type PropsType = {
    key: number
    id: number
    name: string
    description: string
    profileMenuList: Array<ProfileMenuListType>
}

const AccountInfo: React.FC<PropsType> = ({ key, id, name, description }) => {
    return (
    <li className={classes.item} key={key}>
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
