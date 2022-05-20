import TimeTableRow from './TimeTableRow';
import classes from './TimeTableLayout.module.css';

const TimeTableLayout = (props) => {
  const { schedulerDate } = props;

  const weeks = [];

  for (let i = 0; i < schedulerDate.date.length; i += 7) {
    weeks.push(schedulerDate.date.slice(i, i + 7));
  }

  const timeTableRowsList = Array(6)
    .fill()
    .map((row, idx) => (
      <TimeTableRow key={idx} daysOfWeek={weeks[idx]} {...props} />
    ));

  return <div className={classes['timetable-layout']}>{timeTableRowsList}</div>;
};

export default TimeTableLayout;
