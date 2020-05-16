import React from 'react';
import classes from './Logo.module.scss';
import LogoSmall from '../../../../assets/Header/LogoSmall.png';

const Logo = () => (
  <div className={classes.wrapper}>
    <div className={classes.imageBlock}>
      <img src={LogoSmall} alt="Logo" className={classes.image} />
    </div>
    <h1 className={classes.text}>VIKINGER</h1>
  </div>
);

export default Logo;
