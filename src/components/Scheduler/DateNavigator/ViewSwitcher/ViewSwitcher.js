import CalendarMonth from '../../../UI/Icons/Calendar/CalendarMonth';
import CalendarWeek from '../../../UI/Icons/Calendar/CalendarWeek';
import classes from './ViewSwitcher.module.css';

const ViewSwitcher = (props) => {
  const { schedulerDate, onChangeSchedulerDate } = props;

  return (
    <button
      type='button'
      className={classes['view-switch']}
      onClick={() => onChangeSchedulerDate({ type: 'SWITCH_VIEW' })}
    >
      {schedulerDate.viewState ? <CalendarMonth /> : <CalendarWeek />}
    </button>
  );
};

export default ViewSwitcher;
