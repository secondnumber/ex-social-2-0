import React from 'react';
import classes from './LoginPage.module.scss';
import LoginIntro from './LoginIntro/LoginIntro';
import LoginForm from './LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.bgImage}>
                <div className={classes.content}>
                    <LoginIntro />
                    <LoginForm />
                </div>
            </div>
            <div className={classes.bgSquare}></div>
        </div>
    );
};

export default LoginPage;
