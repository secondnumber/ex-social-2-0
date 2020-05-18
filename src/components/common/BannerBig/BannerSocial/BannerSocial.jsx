import React from 'react';
import classes from './BannerSocial.module.scss';

const BannerSocial = (props) => {
  return (
    <li className={classes.item}>
      <img src={props.name}/>
    </li>
  );
};

export default BannerSocial;