import classes from './TimeTableCell.module.css';

const TimeTableCell = (props) => {
  return (
    <div className={classes['timetable-cell']}>
      <div className={classes['timetable-cell__inner']}></div>
    </div>
  );
};

export default TimeTableCell;
