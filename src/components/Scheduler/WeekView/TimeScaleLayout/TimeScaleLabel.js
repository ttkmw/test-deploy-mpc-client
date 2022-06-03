import classes from './TimeScaleLabel.module.css';

const TimeScaleLabel = (props) => {
  const { firstDayHour } = props;

  return (
    <div className={classes['timescale-label']}>
      <div className={classes['timescale-label__time']}>
        <span>
          {firstDayHour < 10 ? `0${firstDayHour}시` : `${firstDayHour}시`}
        </span>
      </div>
    </div>
  );
};

export default TimeScaleLabel;
