import classes from './DayScale.module.css';

const DayScale = (props) => {
  const { dayOfWeek, className } = props;

  return (
    <div
      className={`${classes['dayscale']} ${className && classes[className]}`}
    >
      <div className={classes['dayscale__weekday']}>{dayOfWeek}</div>
    </div>
  );
};

export default DayScale;
