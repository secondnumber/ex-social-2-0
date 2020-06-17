import React from 'react';
import classes from './About.module.scss';
import AboutItem from './AboutItem/AboutItem';

const About = (props) => {
  let infoList = props.about.infoList.map((el) => (
    <AboutItem key={el.id} option={el.option} value={el.value} />
  ));
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>{props.about.title}</h3>
      <p className={classes.description}>{props.about.status}</p>
      <div className={classes.table}>{infoList}</div>
    </div>
  );
};
export default About;
