import TimeScaleLabel from './TimeScaleLabel';
import classes from './TimeScaleLayout.module.css';

const TimeScaleLayout = (props) => {
  const { startDayHour, endDayHour } = props;

  const timeScaleLabelList = Array(endDayHour - startDayHour)
    .fill()
    .map((row, idx) => (
      <TimeScaleLabel
        key={idx}
        {...props}
        firstDayHour={startDayHour + idx}
        className={idx === 0 ? 'first' : null}
      />
    ));

  return (
    <table className={classes['timescale-layout']}>
      <tbody>{timeScaleLabelList}</tbody>
    </table>
  );
};

export default TimeScaleLayout;
