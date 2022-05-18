import DayScale from './DayScale';
import classes from './DayScaleWrap.module.css';

const DayScaleWrap = (props) => {
  const { excludedDays = null, schedulerDate } = props;

  const dayScaleList = schedulerDate.map((date, idx) => (
    <DayScale
      key={idx}
      date={date}
      className={idx === 0 ? 'sun' : idx === 6 ? 'sat' : null}
    />
  ));
  return (
    <div className={classes['dayscale-wrap']}>
      {excludedDays === null
        ? dayScaleList
        : dayScaleList.filter((day, idx) => !excludedDays.includes(idx))}
    </div>
  );
};

export default DayScaleWrap;