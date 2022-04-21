import React from 'react';

import classes from './Scheduler.module.css';

const Scheduler = (props) => {
  return (
    <div className={classes.scheduler}>
      {React.cloneElement(props.children, { ...props })}
    </div>
  );
};

export default Scheduler;
