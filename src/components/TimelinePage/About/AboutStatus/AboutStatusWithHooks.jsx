import React, { useEffect, useState } from 'react';
import classes from './AboutStatus.module.scss';

const AboutStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
      setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <p onClick={activateEditMode} className={classes.text}>
          {props.status || 'No status'}
        </p>
      )}
      {editMode && (
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactivateEditMode}
          className={classes.input}
          value={status}
        />
      )}
    </div>
  );
};

export default AboutStatusWithHooks;
