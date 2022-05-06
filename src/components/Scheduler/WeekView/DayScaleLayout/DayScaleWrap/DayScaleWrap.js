import DayScaleCell from './DayScale';
import classes from './DayScaleWrap.module.css';

const DayScaleWrap = (props) => {
  const { excludedDays = null, daysOfWeek } = props;

  const dayScaleList = daysOfWeek.map((date, idx) => (
    <DayScaleCell
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
