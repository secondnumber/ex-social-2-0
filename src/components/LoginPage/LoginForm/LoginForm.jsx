import React from 'react';
import classes from './LoginForm.module.scss';
import Rocket from './Rocket.png';

const LoginForm = () => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={Rocket} alt="" />
            <p className={classes.header}>Create your Account!</p>
            <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button>Register Now!</button>
                <p>
                    You’ll receive a confirmation email in your inbox with a
                    link to activate your account. If you have any problems,
                    contact us!
                </p>
            </form>
        </div>
    );
};

export default LoginForm;
