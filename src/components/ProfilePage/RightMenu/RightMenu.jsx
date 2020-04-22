import React from 'react';
import classes from './RightMenu.module.scss';
import smallAvatarIcon from './icons/SmallProfileInfo.png';

const RightMenu = () => (
    <ul className={classes.list}>
        <li className={classes.item}>
            <a href="#">
                <img src={smallAvatarIcon} alt="" />
            </a>
        </li>
        <li className={classes.item}>
            <a href="#">
                <img src={smallAvatarIcon} alt="" />
            </a>
        </li>
        <li className={classes.item}>
            <a href="#">
                <img src={smallAvatarIcon} alt="" />
            </a>
        </li>
        <li className={classes.item}>
            <a href="#">
                <img src={smallAvatarIcon} alt="" />
            </a>
        </li>
        <li className={classes.item}>
            <a href="#">
                <img src={smallAvatarIcon} alt="" />
            </a>
        </li>
        <li className={classes.item}>
            <a href="#">
                <img src={smallAvatarIcon} alt="" />
            </a>
        </li>
        <li className={classes.item}>
            <a href="#">
                <img src={smallAvatarIcon} alt="" />
            </a>
        </li>
        <li className={classes.item}>
            <a href="#">
                <img src={smallAvatarIcon} alt="" />
            </a>
        </li>
    </ul>
);

export default RightMenu;
