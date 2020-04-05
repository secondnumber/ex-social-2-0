import React from 'react';
import classes from './LoginPage.module.scss';
import LoginIntro from './LoginIntro/LoginIntro';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import {BrowserRouter, Route} from "react-router-dom";

const LoginPage = () => {
    return (
        <BrowserRouter>
        <div className={classes.wrapper}>
            <LoginIntro />
            <Route path='/register' componenet={RegisterForm}/>
            <Route path='/login' componenet={LoginForm}/>
        </div>
        </BrowserRouter>
    );
};

export default LoginPage;
