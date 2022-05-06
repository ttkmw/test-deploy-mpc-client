import TimeTableCell from './TimeTableCell';
import classes from './TimeTableRow.module.css';

const TimeTableRow = (props) => {
  const { excludedDays = null } = props;

  const timeTableCellsList = Array(7)
    .fill()
    .map((row, idx) => <TimeTableCell key={idx} {...props} />);

  return (
    <div className={classes['timetable-row']}>
      {excludedDays === null
        ? timeTableCellsList
        : timeTableCellsList.filter((cell, idx) => !excludedDays.includes(idx))}
    </div>
  );
};

export default TimeTableRow;
