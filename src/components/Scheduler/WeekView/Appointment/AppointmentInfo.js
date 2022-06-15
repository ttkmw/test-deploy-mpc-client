import classes from './AppointmentInfo.module.css';

const AppointmentInfo = (props) => {
  const { appointment, playTime } = props;

  const classList = `${classes['appointment-info']} ${
    playTime === 1
      ? classes['one-hour']
      : playTime === 1.5
      ? classes['one-hour-half']
      : ''
  }`;

  if (appointment.productType !== '예약불가') {
    return (
      <div className={classList}>
        <div className={classes['appointment-info__time']}>
          {appointment.time.startTime.split('T')[1].slice(0, 5)}
          <span className={classes['appointment-info__time--tilde']}>~</span>
          {appointment.time.endTime.split('T')[1].slice(0, 5)}
        </div>
        {appointment.productType !== '예약가능' && (
          <div className={classes['appointment-info__consumer']}>
            {appointment.consumer}
          </div>
        )}
      </div>
    );
  }

  if (appointment.productType === '예약불가') {
    return (
      <div className={classList}>
        <div
          className={`${classes['appointment-info__consumer']} ${classes['non-blocking']}`}
        >
          {appointment.productType}
        </div>
      </div>
    );
  }
};

export default AppointmentInfo;
