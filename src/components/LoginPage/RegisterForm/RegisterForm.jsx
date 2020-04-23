import React from 'react';
import classes from './RegisterForm.module.scss';
import Rocket from './Rocket.png';

const RegisterForm = () => (
  <div className={classes.wrapper}>
    <div className={classes.box}>
      <img className={classes.image} src={Rocket} alt="" />
      <p className={classes.header}>Create your Account!</p>
      <form action="">
        <input type="text" className={classes.email} placeholder="Email" />
        <input
          type="text"
          className={classes.username}
          placeholder="Username"
        />
        <input
          type="password"
          className={classes.password}
          placeholder="Password"
        />
        <input
          type="password"
          className={classes.passwordRepeat}
          placeholder="Repeat Password"
        />
        <label htmlFor="send">
          <input type="checkbox" id="send" className={classes.send} />
          Send me news and updates via email
        </label>
        <button className={classes.login}>Register Now!</button>
        <p>
          You ll receive a confirmation email in your inbox with a link to
          activate your account. If you have any problems,
          <a href="#">contact us!</a>
        </p>
      </form>
    </div>
  </div>
);

export default RegisterForm;
