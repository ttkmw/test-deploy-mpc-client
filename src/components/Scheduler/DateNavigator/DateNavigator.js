import ViewSwitcher from './ViewSwitcher/ViewSwitcher';
import classes from './DateNavigator.module.css';

const DateNavigator = (props) => {
  const { viewState, schedulerDate, onChangeSchedulerDate } = props;

  const prevDateHandler = () => {
    if (!viewState) {
      onChangeSchedulerDate({ type: 'PREV_MONTH' });
    }

    if (viewState) {
      onChangeSchedulerDate({ type: 'PREV_WEEK' });
    }
  };

  const nextDateHandler = () => {
    if (!viewState) {
      onChangeSchedulerDate({ type: 'NEXT_MONTH' });
    }

    if (viewState) {
      onChangeSchedulerDate({ type: 'NEXT_WEEK' });
    }
  };

  const curDateHandler = () => {
    if (!viewState) {
      onChangeSchedulerDate({ type: 'CUR_MONTH', value: new Date() });
    }

    if (viewState) {
      onChangeSchedulerDate({ type: 'CUR_WEEK', value: new Date() });
    }
  };

  return (
    <div className={classes['date-navigator']}>
      <div className={classes['date-navigator__inner']}>
        <strong className={classes['date-navigator__title']}>
          {viewState &&
            `${schedulerDate[0].getFullYear()}년 ${
              schedulerDate[0].getMonth() + 1
            }월`}
          {!viewState &&
            `${schedulerDate[6].getFullYear()}년 ${
              schedulerDate[6].getMonth() + 1
            }월`}
        </strong>
        <div className={classes['date-navigator__buttons']}>
          <button
            type='button'
            className={classes['btn--icon']}
            onClick={prevDateHandler}
          >
            &lt;
          </button>
          <button
            type='button'
            onClick={curDateHandler}
            className={classes['btn--border']}
          >
            오늘
          </button>
          <button
            type='button'
            className={classes['btn--icon']}
            onClick={nextDateHandler}
          >
            &gt;
          </button>
          <ViewSwitcher {...props} />
        </div>
      </div>
    </div>
  );
};

export default DateNavigator;
