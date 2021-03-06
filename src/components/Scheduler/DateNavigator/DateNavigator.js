import ViewSwitcher from './ViewSwitcher/ViewSwitcher';
import ChevronRight from '../../UI/Icons/Chevron/ChevronRight';
import ChevronLeft from '../../UI/Icons/Chevron/ChevronLeft';
import classes from './DateNavigator.module.css';

const DateNavigator = (props) => {
  const { schedulerDate, onChangeSchedulerDate } = props;

  const prevDateHandler = () => {
    if (!schedulerDate.viewState) {
      onChangeSchedulerDate({ type: 'PREV_MONTH' });
    }

    if (schedulerDate.viewState) {
      onChangeSchedulerDate({ type: 'PREV_WEEK' });
    }
  };

  const nextDateHandler = () => {
    if (!schedulerDate.viewState) {
      onChangeSchedulerDate({ type: 'NEXT_MONTH' });
    }

    if (schedulerDate.viewState) {
      onChangeSchedulerDate({ type: 'NEXT_WEEK' });
    }
  };

  const curDateHandler = () => {
    if (!schedulerDate.viewState) {
      onChangeSchedulerDate({ type: 'CUR_MONTH', value: new Date() });
    }

    if (schedulerDate.viewState) {
      onChangeSchedulerDate({ type: 'CUR_WEEK', value: new Date() });
    }
  };

  const dateChangeHandler = (evt) => {
    if (!evt.target.value) return;
    if (!schedulerDate.viewState) {
      onChangeSchedulerDate({
        type: 'CUR_MONTH',
        value: new Date(evt.target.value),
      });
    }

    if (schedulerDate.viewState) {
      onChangeSchedulerDate({
        type: 'CUR_WEEK',
        value: new Date(evt.target.value),
      });
    }
  };

  return (
    <div className={classes['date-navigator']}>
      <div className={classes['date-navigator__inner']}>
        <div className={classes['date-navigator__navigation']}>
          <button
            type='button'
            className={classes['btn-navigator']}
            onClick={prevDateHandler}
          >
            <ChevronLeft />
          </button>
          <strong className={classes['date-navigator__title']}>
            {schedulerDate.viewState &&
              `${
                schedulerDate.date[0].getMonth() + 1
              }월 ${schedulerDate.date[0].getDate()}일 - ${
                schedulerDate.date[6].getMonth() + 1
              }월 ${schedulerDate.date[6].getDate()}일`}
            {!schedulerDate.viewState &&
              `${schedulerDate.date[6].getFullYear()}년 ${
                schedulerDate.date[6].getMonth() + 1
              }월`}
            <input
              type='date'
              value={schedulerDate.date[6].toJSON().split('T')[0]}
              onChange={dateChangeHandler}
              tabIndex='-1'
              className={classes['date-navigator__input-date']}
            />
          </strong>

          <button
            type='button'
            className={classes['btn-navigator']}
            onClick={nextDateHandler}
          >
            <ChevronRight />
          </button>
        </div>
        <button
          type='button'
          onClick={curDateHandler}
          className={classes['btn-today']}
        >
          오늘
        </button>
        <ViewSwitcher {...props} />
      </div>
    </div>
  );
};

export default DateNavigator;
