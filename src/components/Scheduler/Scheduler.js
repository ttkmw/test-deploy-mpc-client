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

const getDaysOfMonth = (firstDayOfWeek, curDate) => {
  const daysOfMonth = [];

  if (
    firstDayOfWeek.getMonth() !== curDate.getMonth() ||
    firstDayOfWeek.getDate() === 1
  ) {
    for (let i = 0; i < 42; i++) {
      daysOfMonth[i] = new Date(
        firstDayOfWeek.getFullYear(),
        firstDayOfWeek.getMonth(),
        firstDayOfWeek.getDate() + i
      );
    }
  }

  if (firstDayOfWeek.getMonth() === curDate.getMonth()) {
    const firstOfThisMonth = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    );

    for (let i = 0; i < 42; i++) {
      daysOfMonth[i] = new Date(
        firstOfThisMonth.getFullYear(),
        firstOfThisMonth.getMonth(),
        firstOfThisMonth.getDate() - firstOfThisMonth.getDay() + i
      );
    }
  }

  return daysOfMonth;
};

const schedulerDateReducer = (state, action) => {
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
    case 'PREV_MONTH':
      return getDaysOfMonth(
        new Date(
          state[0].getFullYear(),
          state[0].getMonth(),
          state[0].getDate() - 7
        ),
        new Date(state[6].getFullYear(), state[6].getMonth(), 0)
      );
    case 'NEXT_MONTH':
      return getDaysOfMonth(
        new Date(
          state[0].getFullYear(),
          state[0].getMonth(),
          state[0].getDate() + 42
        ),
        new Date(state[6].getFullYear(), state[6].getMonth() + 1, 1)
      );
    case 'CUR_MONTH':
      return getDaysOfMonth(
        new Date(
          action.value.getFullYear(),
          action.value.getMonth(),
          action.value.getDate() - action.value.getDay()
        ),
        action.value
      );
    default:
      return state;
  }
};

const Scheduler = (props) => {
  const { defaultCurrentDate = new Date() } = props;

  const [schedulerDate, dispatchSchedulerDate] = useReducer(
    schedulerDateReducer,
    getDaysOfMonth(getFirstDayOfWeek(defaultCurrentDate), defaultCurrentDate)
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
        schedulerDate,
        onChangeSchedulerDate: dispatchSchedulerDate,
      })}
    </div>
  );
};

export default Scheduler;
