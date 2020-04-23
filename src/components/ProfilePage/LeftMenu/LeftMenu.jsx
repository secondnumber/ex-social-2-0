import React from 'react';
import classes from './LeftMenu.module.scss';
import smallAvatarIcon from './icons/SmallProfileInfo.png';
import NewsFeedIcon from './icons/NewsfeedIcon.png';
import OverviewIcon from './icons/OverviewIcon.png';
import GroupsIcon from './icons/GroupsIcon.png';
import MembersIcon from './icons/MembersIcon.png';
import BadgesIcon from './icons/BadgesIcon.png';
import QuestsIcon from './icons/QuestsIcon.png';
import StreamsIcon from './icons/StreamsIcon.png';
import EventsIcon from './icons/EventsIcon.png';
import ForumsIcon from './icons/ForumsIcon.png';
import MarketplaceIcon from './icons/MarketplaceIcon.png';

const LeftMenu = () => (
  <ul className={classes.list}>
    <li className={classes.item}>
      <a href="#">
        <img src={smallAvatarIcon} alt="" />
      </a>
    </li>
    <li className={classes.item}>
      <a href="#">
        <img src={NewsFeedIcon} alt="" />
      </a>
    </li>
    <li className={classes.item}>
      <a href="#">
        <img src={OverviewIcon} alt="" />
      </a>
    </li>
    <li className={classes.item}>
      <a href="#">
        <img src={GroupsIcon} alt="" />
      </a>
    </li>
    <li className={classes.item}>
      <a href="#">
        <img src={MembersIcon} alt="" />
      </a>
    </li>
    <li className={classes.item}>
      <a href="#">
        <img src={BadgesIcon} alt="" />
      </a>
    </li>
    <li className={classes.item}>
      <a href="#">
        <img src={QuestsIcon} alt="" />
      </a>
    </li>
    <li className={classes.item}>
      <a href="#">
        <img src={StreamsIcon} alt="" />
      </a>
    </li>
    <li className={classes.item}>
      <a href="#">
        <img src={EventsIcon} alt="" />
      </a>
    </li>
    <li className={classes.item}>
      <a href="#">
        <img src={ForumsIcon} alt="" />
      </a>
    </li>
    <li className={classes.item}>
      <a href="#">
        <img src={MarketplaceIcon} alt="" />
      </a>
    </li>
  </ul>
);

export default LeftMenu;
