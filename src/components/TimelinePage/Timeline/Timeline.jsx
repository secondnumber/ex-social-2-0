import React from 'react';
import classes from './Timeline.module.scss';
import TimelineForm from '../TimelineForm/TimelineForm';

const Timeline = (props) => {
  let addNewMessage = (value) => {
      alert(value.post)
  }
  return (
    <div className={classes.wrapper}>
      <TimelineForm onSubmit={addNewMessage} />
      Timeline
    </div>
  );
};

export default Timeline;
