import { Fragment } from 'react';
import AppointmentInfo from './AppointmentInfo';
import classes from './Appointment.module.css';

const Appointment = (props) => {
  const { appointment } = props;

  appointment.sort(
    (a, b) =>
      +a.time.startTime.split('T')[1].slice(0, 2) -
      +b.time.startTime.split('T')[1].slice(0, 2)
  );

  return (
    <Fragment>
      {appointment.map((data, idx) => (
        <li key={idx} className={classes.appointment}>
          <AppointmentInfo appointmentInfo={data} {...props} />
        </li>
      ))}
    </Fragment>
  );
};

export default Appointment;
