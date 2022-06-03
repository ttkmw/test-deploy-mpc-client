import classes from './DayScale.module.css';

const DayScale = (props) => {
  const { date, className } = props;

  const weekday = date.toLocaleString('ko-KR', { weekday: 'long' }).slice(0, 1);
  const day = date.getDate();

  return (
    <div
      className={`${classes['dayscale']} ${className && classes[className]}`}
    >
      <div className={classes['dayscale__weekday']}>{weekday}</div>
      <div className={classes['dayscale__day']}>{day}</div>
    </div>
  );
};

export default DayScale;
