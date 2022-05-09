import Appointment from '../Appointment/Appointment';
import classes from './TimeTableCell.module.css';

const TimeTableCell = (props) => {
  const { cellData = null } = props;

  if (cellData) {
    return (
      <div className={classes['timetable-cell']}>
        <Appointment appointment={cellData} />
      </div>
    );
  }

  return <div className={classes['timetable-cell']}></div>;
};

export default TimeTableCell;
