import React from 'react';
import classes from './About.module.scss';
import AboutItem from './AboutItem/AboutItem';
import AboutStatus from './AboutStatus/AboutStatus';

const About = (props) => {
  let infoList = props.about.infoList.map((el) => (
    <AboutItem key={el.id} option={el.option} value={el.value} />
  ));
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>{props.about.title}</h3>
      <AboutStatus status={'Hello!'} />
      <div className={classes.table}>{infoList}</div>
    </div>
  );
};
export default About;
