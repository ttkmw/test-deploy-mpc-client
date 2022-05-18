import DayScale from './DayScale';
import classes from './DayScaleWrap.module.css';

const DayScaleWrap = (props) => {
  const { excludedDays = null } = props;

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const dayScaleList = daysOfWeek.map((day, idx) => (
    <DayScale
      key={idx}
      dayOfWeek={day}
      className={idx === 0 ? 'sun' : idx === 6 ? 'sat' : ''}
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
