import React from 'react';
import classes from './Logo.module.scss';
import LogoSmall from './LogoSmall.png';

const Logo = () => (
    <div className={classes.wrapper}>
      <img src={LogoSmall} alt="Logo" className={classes.logo} />
      <h1 className={classes.header}>VIKINGER</h1>
    </div>
);

export default Logo;
