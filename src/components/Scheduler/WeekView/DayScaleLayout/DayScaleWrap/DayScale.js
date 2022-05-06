import classes from './DayScale.module.css';

const DayScale = (props) => {
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
    <div
      className={`${classes['dayscale']} ${isToday ? classes['today'] : ''} ${
        className ? classes[className] : ''
      }`}
    >
      <div className={classes['dayscale__inner']}>
        <div className={classes['dayscale__weekday']}>{weekday}</div>
        <div className={classes['dayscale__day']}>{day}</div>
      </div>
    </div>
  );
};

export default DayScale;
