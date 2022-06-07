import Appointment from '../Appointment/Appointment';
import classes from './TimeTableCell.module.css';

const TimeTableCell = (props) => {
  const { date, thisMonth, isSunday, cellData } = props;

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

  const classList = `${classes['timetable-cell']} ${isToday} ${isThisMonth} ${isNotSunday}`;

  return (
    <div className={classList}>
      <div className={classes['timetable-cell__inner']}>
        <div className={classes['timetable-cell__date']}>{date.getDate()}</div>
        {!cellData.length || (
          <ul className={classes['timetable-cell__data']}>
            <Appointment appointment={cellData} />
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimeTableCell;
