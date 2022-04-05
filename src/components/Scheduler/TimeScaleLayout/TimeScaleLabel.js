import classes from './TimeScaleLabel.module.css';

const TimeScaleLabel = (props) => {
  const { firstDayHour } = props;

  return (
    <tr>
      <td className={classes['timescale-label']}>
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
    </tr>
  );
};

export default TimeScaleLabel;
