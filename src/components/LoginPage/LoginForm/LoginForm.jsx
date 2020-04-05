import React from 'react';
import classes from './LoginForm.module.scss';
import Rocket from './Rocket.png';

const LoginForm = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.box}>
            <img className={classes.image} src={Rocket} alt="" />
            <p className={classes.header}>Account Login</p>
            <form action="">
                <input type="text" className={classes.username} placeholder="Username or Email"/>
                <input type="password" className={classes.password} placeholder="Password"/>
                <label><input type="checkbox" className={classes.remember} />Remember Me</label>
                <p className={classes.forgot}><a>Forgot Password?</a></p>
                <button className={classes.login}>Login to your Account!</button>
                <p>Login with your Social Account</p>
                <ul className={classes.socialList}>
                    <li className={classes.socialItem}><a>Facebook</a></li>
                    <li className={classes.socialItem}><a>Twitter</a></li>
                    <li className={classes.socialItem}><a>Google</a></li>
                    <li className={classes.socialItem}><a>Youtube</a></li>
                </ul>
            </form>
            </div>
        </div>
    );
};

export default LoginForm;
