import TimeTableCell from './TimeTableCell';
import classes from './TimeTableRow.module.css';

const TimeTableRow = (props) => {
  const { excludedDays = null, daysOfWeek } = props;

  const timeTableCellsList = Array(7)
    .fill()
    .map((cell, idx) => (
      <TimeTableCell
        key={idx}
        date={daysOfWeek[idx]}
        isSunday={idx === 0}
        {...props}
      />
    ));

  return (
    <div className={classes['timetable-row']}>
      {excludedDays === null
        ? timeTableCellsList
        : timeTableCellsList.filter((cell, idx) => !excludedDays.includes(idx))}
    </div>
  );
};

export default TimeTableRow;
