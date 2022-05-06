import classes from './TimeScaleLabel.module.css';

const TimeScaleLabel = (props) => {
  const { firstDayHour } = props;

  return (
    <div className={classes['timescale-label']}>
      <div className={classes['timescale-label__time']}>
        <span>
          {firstDayHour < 12
            ? `오전 ${firstDayHour}시`
            : `오후 ${firstDayHour - 12 !== 0 ? `${firstDayHour - 12}` : 12}시`}
        </span>
      </div>
      <div className={classes['timescale-label__empty']}></div>
    </div>
  );
};

export default TimeScaleLabel;
