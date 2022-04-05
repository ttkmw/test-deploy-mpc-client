import TimeTableRow from './TimeTableRow';
import classes from './TimeTableLayout.module.css';

const TimeTableLayout = (props) => {
  const { startDayHour, endDayHour } = props;

  const timeTableRowsList = Array(endDayHour - startDayHour)
    .fill()
    .map((row, idx) => <TimeTableRow key={idx} {...props} />);

  return (
    <table className={classes['timetable-layout']}>
      <tbody>{timeTableRowsList}</tbody>
    </table>
  );
};

export default TimeTableLayout;
