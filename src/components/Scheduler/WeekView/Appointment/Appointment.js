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
    +startTime.split(':')[1] === 30 ? 'calc(50% + .4rem + 1px)' : '.4rem';
  const heightOfOneBlock = '(5.4rem - .8rem)';
  const rowGap = '(.8rem + 1px)';
  const totalHeight = `calc(
    ${heightOfOneBlock} * ${playTime} + ${rowGap} * ${playTime - 1}
  )`;

  return (
    <div
      className={classes['appointment']}
      style={{
        top: startPoint,
        height: totalHeight,
      }}
    >
      {appointment.productType}
    </div>
  );
};

export default Appointment;
