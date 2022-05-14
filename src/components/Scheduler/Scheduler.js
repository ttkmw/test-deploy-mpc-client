import React, { useReducer } from 'react';

import classes from './Scheduler.module.css';

const getFirstDayOfWeek = (curDate) => {
  return new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    curDate.getDate() - curDate.getDay()
  );
};

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

const daysOfWeekReducer = (state, action) => {
  switch (action.type) {
    case 'PREV_WEEK':
      return getDaysOfWeek(
        new Date(
          state[0].getFullYear(),
          state[0].getMonth(),
          state[0].getDate() - 7
        )
      );
    case 'NEXT_WEEK':
      return getDaysOfWeek(
        new Date(
          state[0].getFullYear(),
          state[0].getMonth(),
          state[0].getDate() + 7
        )
      );
    case 'CUR_WEEK':
      return getDaysOfWeek(
        new Date(
          action.value.getFullYear(),
          action.value.getMonth(),
          action.value.getDate() - action.value.getDay()
        )
      );
    default:
      return state;
  }
};

const Scheduler = (props) => {
  const { defaultCurrentDate = new Date() } = props;

  const [daysOfWeek, dispatchDaysOfWeek] = useReducer(
    daysOfWeekReducer,
    getDaysOfWeek(getFirstDayOfWeek(defaultCurrentDate))
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
        daysOfWeek,
        onChangeDaysOfWeek: dispatchDaysOfWeek,
      })}
    </div>
  );
};

export default Scheduler;
