import classes from './TimeTableCell.module.css';

const TimeTableCell = (props) => {
  const { date, className } = props;

  return (
    <div
      className={`${classes['timetable-cell']} ${
        className && classes[className]
      }`}
    >
      <div className={classes['timetable-cell__inner']}>
        <div className={classes['timetable-cell__date']}>{date.getDate()}</div>
      </div>
    </div>
  );
};

export default TimeTableCell;
