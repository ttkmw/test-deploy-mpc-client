import { useState, useEffect } from 'react';

import classes from './DateNavigator.module.css';

const DateNavigator = (props) => {
  const { defaultCurrentDate = new Date() } = props;

  const [schedulerFirstDayOfWeek, setSchedulerFirstDayOfWeek] = useState(
    new Date(
      defaultCurrentDate.getFullYear(),
      defaultCurrentDate.getMonth(),
      defaultCurrentDate.getDate() - defaultCurrentDate.getDay()
    )
  );
  const [schedulerDaysOfWeek, setSchedulerDaysOfWeek] = useState([]);

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

  const prevWeekHandler = () => {
    setSchedulerFirstDayOfWeek(
      (prevState) =>
        new Date(
          prevState.getFullYear(),
          prevState.getMonth(),
          prevState.getDate() - 7
        )
    );
  };

  const nextWeekHandler = () => {
    setSchedulerFirstDayOfWeek(
      (prevState) =>
        new Date(
          prevState.getFullYear(),
          prevState.getMonth(),
          prevState.getDate() + 7
        )
    );
  };

  const currentWeekHandler = () => {
    setSchedulerFirstDayOfWeek(
      new Date(
        defaultCurrentDate.getFullYear(),
        defaultCurrentDate.getMonth(),
        defaultCurrentDate.getDate() - defaultCurrentDate.getDay()
      )
    );
  };

  useEffect(() => {
    setSchedulerDaysOfWeek(getDaysOfWeek(schedulerFirstDayOfWeek));
  }, [schedulerFirstDayOfWeek]);

  return (
    <div className={classes['date-navigator']}>
      <div className={classes['date-navigator__inner']}>
        <strong className={classes['date-navigator__title']}>
          {`${schedulerFirstDayOfWeek.getFullYear()}년 ${
            schedulerFirstDayOfWeek.getMonth() + 1
          }월`}
        </strong>
        <div className={classes['date-navigator__buttons']}>
          <button
            type='button'
            className={classes['btn--icon']}
            onClick={prevWeekHandler}
          >
            &lt;
          </button>
          <button
            type='button'
            onClick={currentWeekHandler}
            className={classes['btn--border']}
          >
            오늘
          </button>
          <button
            type='button'
            className={classes['btn--icon']}
            onClick={nextWeekHandler}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateNavigator;
