import Appointment from '../Appointment/Appointment';
import classes from './TimeTableCell.module.css';

const TimeTableCell = (props) => {
  const { cellData = null } = props;

  if (cellData) {
    return (
      <div className={classes['timetable-cell']}>
        <div className={classes['timetable-cell__inner']}>
          <Appointment appointment={cellData} />
        </div>
      </div>
    );
  }

  return (
    <div className={classes['timetable-cell']}>
      <div className={classes['timetable-cell__inner']}></div>
    </div>
  );
};

export default TimeTableCell;
