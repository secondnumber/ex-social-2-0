import React from 'react';
import classes from './LeftMenu.module.scss';
import smallAvatarIcon from './SmallProfileInfo.png';
import newsFeedIcon from './NewsfeedIcon.png'

const LeftMenu = () => (
  <div className={classes.wrapper}>
    <div className={classes.smallAvatar}><a href="#"><img src={smallAvatarIcon} alt=""/></a></div>
    <div className={classes.newsFeed}><a href=""><img src={newsFeedIcon} alt=""/></a></div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
  </div>
);

export default LeftMenu;
