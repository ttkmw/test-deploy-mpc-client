import classes from './AppointmentInfo.module.css';

const AppointmentInfo = (props) => {
  const { appointmentInfo } = props;

  return (
    <div
      className={classes['appointment-info']}
      data-product-type={appointmentInfo.productType}
      onClick={(evt) => evt.stopPropagation()}
    >
      <div className={classes['appointment-info__inner']}>
        <div className={classes['appointment-info__time']}>
          {appointmentInfo.time.startTime.split('T')[1].slice(0, 5)}
          <span className={classes['appointment-info__time--tilde']}>~</span>
          <span className={classes['appointment-info__time--end-time']}>
            {appointmentInfo.time.endTime.split('T')[1].slice(0, 5)}
          </span>
        </div>
        <div className={classes['appointment-info__consumer']}>
          {appointmentInfo.consumer}
        </div>
      </div>
    </div>
  );
};

export default AppointmentInfo;
