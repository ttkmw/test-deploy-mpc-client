import classes from './TimeScaleLabel.module.css';

const TimeScaleLabel = (props) => {
  const { firstDayHour, className } = props;

  return (
    <tr>
      <td
        className={`${classes['timescale-label']} ${
          className !== null ? classes.first : ''
        }`}
      >
        <div>
          <span className={classes['timescale-label__time']}>
            {firstDayHour < 12
              ? `오전 ${firstDayHour}시`
              : `오후 ${
                  firstDayHour - 12 !== 0 ? `${firstDayHour - 12}` : 12
                }시`}
          </span>
        </div>
      </td>
      <td className={classes['timescale-empty']}>
        <div>&nbsp;</div>
      </td>
    </tr>
  );
};

export default TimeScaleLabel;
