import classes from './TimeTableCell.module.css';

const TimeTableCell = (props) => {
  const { date, thisMonth, isSunday } = props;

  const isToday =
    date.toLocaleDateString() === new Date().toLocaleDateString()
      ? classes.today
      : '';

  const isThisMonth =
    thisMonth.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    }) ===
    date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    })
      ? ''
      : classes.blur;

  const isNotSunday = !isSunday ? '' : classes.sun;

  const classList = `${isToday} ${isThisMonth} ${isNotSunday}`;

  return (
    <div className={`${classes['timetable-cell']} ${classList}`}>
      <div className={classes['timetable-cell__inner']}>
        <div className={classes['timetable-cell__date']}>{date.getDate()}</div>
      </div>
    </div>
  );
};

export default TimeTableCell;
