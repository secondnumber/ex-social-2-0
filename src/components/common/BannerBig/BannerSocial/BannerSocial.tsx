import React from 'react';
import classes from './BannerSocial.module.scss';

type PropsType = {
  key: number
  name: string
}

const BannerSocial: React.FC<PropsType> = ( {key, name} ) => {
  return (
    <li className={classes.item} key={key}>
      <img src={name} alt="Banner"/>
    </li>
  );
};

export default BannerSocial;