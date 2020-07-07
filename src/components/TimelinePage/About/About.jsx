import React from 'react';
import classes from './About.module.scss';
import AboutItem from './AboutItem/AboutItem';
import AboutStatusWithHooks from './AboutStatus/AboutStatusWithHooks';

const About = (props) => {
  let infoList = props.about.infoList.map((el) => (
    <AboutItem key={el.id} option={el.option} value={el.value} />
  ));
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>{props.about.title}</h3>
      <AboutStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
        getStatus={props.getStatus}
      />
      <div className={classes.table}>{infoList}</div>
    </div>
  );
};
export default About;
