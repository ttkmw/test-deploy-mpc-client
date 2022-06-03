import Appointment from '../Appointment/Appointment';
import classes from './TimeTableCell.module.css';

const TimeTableCell = (props) => {
  const { cellData = null, date } = props;

  const isToday =
    date.toLocaleDateString() === new Date().toLocaleDateString()
      ? classes.today
      : '';

  if (cellData) {
    return (
      <div className={`${classes['timetable-cell']} ${isToday}`}>
        <div className={classes['timetable-cell__inner']}>
          <Appointment appointment={cellData} />
        </div>
      </div>
    );
  }

  return (
    <div className={`${classes['timetable-cell']} ${isToday}`}>
      <div className={classes['timetable-cell__inner']}></div>
    </div>
  );
};

export default TimeTableCell;
