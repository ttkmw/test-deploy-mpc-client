import classes from './TimeTableCell.module.css';

const TimeTableCell = (props) => {
  const { date } = props;

  return <div className={classes['timetable-cell']}>{date.getDate()}</div>;
};

export default TimeTableCell;
