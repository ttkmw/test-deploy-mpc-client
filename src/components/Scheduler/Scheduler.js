import React, { useState } from 'react';

import classes from './Scheduler.module.css';

const Scheduler = (props) => {
  const { defaultCurrentDate = new Date() } = props;

  const getDaysOfWeek = (firstDayOfWeek) => {
    const daysOfWeek = [];

    for (let i = 0; i < 7; i++) {
      daysOfWeek[i] = new Date(
        firstDayOfWeek.getFullYear(),
        firstDayOfWeek.getMonth(),
        firstDayOfWeek.getDate() + i
      );
    }

    return daysOfWeek;
  };

  const daysOfWeekChangeHandler = (firstDayOfWeek) => {
    setDaysOfWeek(getDaysOfWeek(firstDayOfWeek));
  };

  const [daysOfWeek, setDaysOfWeek] = useState(
    getDaysOfWeek(
      new Date(
        defaultCurrentDate.getFullYear(),
        defaultCurrentDate.getMonth(),
        defaultCurrentDate.getDate() - defaultCurrentDate.getDay()
      )
    )
  );

  const addPropsToReactElement = (element, props) => {
    if (React.isValidElement(element)) {
      return React.cloneElement(element, props);
    }
    return element;
  };

  const addPropsToChildren = (children, props) => {
    if (!Array.isArray(children)) {
      return addPropsToReactElement(children, props);
    }
    return children.map((childElement, idx) =>
      addPropsToReactElement(childElement, { key: idx, ...props })
    );
  };

  return (
    <div className={classes.scheduler}>
      {addPropsToChildren(props.children, {
        ...props,
        onChangeDaysOfWeek: daysOfWeekChangeHandler,
        daysOfWeek,
      })}
    </div>
  );
};

export default Scheduler;
