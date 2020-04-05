import React from 'react';
import classes from './LoginIntro.module.scss';
import Logo from './Logo.png';

const LoginIntro = () => {
    return (
        <div className={classes.intro}>
            <img src={Logo} alt="" />
            <p className={classes.welcome}>WELCOME TO</p>
            <h1 className={classes.header}>VIKINGER</h1>
            <p className={classes.text}>
                The next generation social network & community! Connect with
                your friends and play with our quests and badges gamification
                system!
            </p>
            <p  className={classes.loginButton}><a href="/login">Login</a></p>
            <p  className={classes.registerButton}><a href="/register">Register</a></p>
        </div>
    );
};

export default LoginIntro;
