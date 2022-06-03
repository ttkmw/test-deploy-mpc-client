import CalendarMonth from '../../../UI/Icons/Calendar/CalendarMonth';
import CalendarWeek from '../../../UI/Icons/Calendar/CalendarWeek';
import classes from './ViewSwitcher.module.css';

const ViewSwitcher = (props) => {
  const { schedulerDate, onChangeSchedulerDate } = props;

  return (
    <div className={classes['view-switch']}>
      <input
        type='checkbox'
        defaultChecked={schedulerDate.viewState}
        onChange={() => onChangeSchedulerDate({ type: 'SWITCH_VIEW' })}
        className={classes['view-switch__checkbox']}
      />
      <label className={classes['view-switch__label']}>
        {schedulerDate.viewState ? <CalendarMonth /> : <CalendarWeek />}
      </label>
    </div>
  );
};

export default ViewSwitcher;
