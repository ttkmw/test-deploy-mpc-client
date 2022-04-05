import React from 'react';

import classes from './Scheduler.module.css';

const Scheduler = (props) => {
  return (
    <div className={classes.scheduler}>
      <div>{React.cloneElement(props.children, { ...props })}</div>
    </div>
  );
};

export default Scheduler;
