import classes from './DayScaleCell.module.css';

const DayScaleCell = (props) => {
  const { date, className } = props;

  const weekday = date.toLocaleString('ko-KR', { weekday: 'long' }).slice(0, 1);
  const day = date.getDate();
  const isToday =
    date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) ===
    new Date().toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <td
      className={`${classes['dayscale-cell']} ${
        isToday ? classes['today'] : ''
      } ${classes[className] ? classes[className] : ''}`}
    >
      <div>
        <div className={classes['dayscale-date']}>
          <div className={classes['dayscale-cell__weekday']}>{weekday}</div>
          <div className={classes['dayscale-cell__day']}>{day}</div>
        </div>
      </div>
    </td>
  );
};

export default DayScaleCell;
