import TimeTableRow from './TimeTableRow';
import classes from './TimeTableLayout.module.css';

const TimeTableLayout = (props) => {
  const { startDayHour = 0, endDayHour = 24 } = props;

  const timeTableRowsList = Array(24)
    .fill()
    .map((row, idx) => <TimeTableRow key={idx} {...props} />);

  return (
    <div className={classes['timetable-layout']}>
      {timeTableRowsList.filter(
        (row, idx) => startDayHour <= idx && endDayHour >= idx
      )}
    </div>
  );
};

export default TimeTableLayout;
