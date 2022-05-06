import TimeScaleLabel from './TimeScaleLabel';
import classes from './TimeScaleLayout.module.css';

const TimeScaleLayout = (props) => {
  const { startDayHour = 0, endDayHour = 24 } = props;

  const timeScaleLabelList = Array(24)
    .fill()
    .map((row, idx) => (
      <TimeScaleLabel key={idx} {...props} firstDayHour={idx} />
    ));

  return (
    <div className={classes['timescale-layout']}>
      {timeScaleLabelList.filter(
        (label, idx) => startDayHour <= idx && endDayHour >= idx
      )}
    </div>
  );
};

export default TimeScaleLayout;
