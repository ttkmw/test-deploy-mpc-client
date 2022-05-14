import classes from './DateNavigator.module.css';

const DateNavigator = (props) => {
  const {
    daysOfWeek,
    onChangeDaysOfWeek,
  } = props;

  const prevWeekHandler = () => {
    onChangeDaysOfWeek({type: 'PREV_WEEK'})
  };

  const nextWeekHandler = () => {
    onChangeDaysOfWeek({type: 'NEXT_WEEK'})
  };

  const currentWeekHandler = () => {
    onChangeDaysOfWeek({type: 'CUR_WEEK', value: new Date()})
  };

  return (
    <div className={classes['date-navigator']}>
      <div className={classes['date-navigator__inner']}>
        <strong className={classes['date-navigator__title']}>
          {`${daysOfWeek[0].getFullYear()}년 ${daysOfWeek[0].getMonth() + 1}월`}
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
