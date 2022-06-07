import AppointmentInfo from './AppointmentInfo';
import classes from './Appointment.module.css';

const Appointment = (props) => {
  const { appointment } = props;

  const startTime = new Date(appointment.time.startTime)
    .toTimeString()
    .split(' ')[0];
  const playTime =
    (new Date(appointment.time.endTime) -
      new Date(appointment.time.startTime)) /
    1000 /
    60 /
    60;

  const startPoint =
    +startTime.split(':')[1] === 30 ? 'calc(50% + .25rem + 1px)' : '.25rem';
  const heightOfOneBlock = '(54px - .5rem)';
  const rowGap = '(.5rem + 1px)';
  const totalHeight = `calc(
    ${heightOfOneBlock} * ${playTime} + ${rowGap} * ${playTime - 1}
  )`;

  return (
    <div
      className={classes['appointment']}
      data-product-type={appointment.productType}
      style={{
        top: startPoint,
        height: totalHeight,
      }}
    >
      <AppointmentInfo {...props} playTime={playTime} />
    </div>
  );
};

export default Appointment;
