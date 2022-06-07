import TimeTableRow from './TimeTableRow';
import classes from './TimeTableLayout.module.css';

const TimeTableLayout = (props) => {
  const { schedulerDate, data } = props;
  const weeks = [];
  const filterdAppointments = Array(6)
    .fill()
    .map((row) => []);

  data.forEach((appointment) => {
    if (
      appointment.productType === '예약불가' ||
      appointment.productType === '예약가능'
    ) {
      return;
    }

    if (
      schedulerDate.date[0] <= new Date(`${appointment.date}T00:00`) &&
      schedulerDate.date[6] >= new Date(`${appointment.date}T00:00`)
    ) {
      filterdAppointments[0].push(appointment);
    }

    if (
      schedulerDate.date[7] <= new Date(`${appointment.date}T00:00`) &&
      schedulerDate.date[13] >= new Date(`${appointment.date}T00:00`)
    ) {
      filterdAppointments[1].push(appointment);
    }

    if (
      schedulerDate.date[14] <= new Date(`${appointment.date}T00:00`) &&
      schedulerDate.date[20] >= new Date(`${appointment.date}T00:00`)
    ) {
      filterdAppointments[2].push(appointment);
    }

    if (
      schedulerDate.date[21] <= new Date(`${appointment.date}T00:00`) &&
      schedulerDate.date[27] >= new Date(`${appointment.date}T00:00`)
    ) {
      filterdAppointments[3].push(appointment);
    }

    if (
      schedulerDate.date[28] <= new Date(`${appointment.date}T00:00`) &&
      schedulerDate.date[34] >= new Date(`${appointment.date}T00:00`)
    ) {
      filterdAppointments[4].push(appointment);
    }

    if (
      schedulerDate.date[35] <= new Date(`${appointment.date}T00:00`) &&
      schedulerDate.date[41] >= new Date(`${appointment.date}T00:00`)
    ) {
      filterdAppointments[5].push(appointment);
    }
  });

  for (let i = 0; i < schedulerDate.date.length; i += 7) {
    weeks.push(schedulerDate.date.slice(i, i + 7));
  }
  const thisMonth = schedulerDate.date[6];

  const timeTableRowsList = Array(6)
    .fill()
    .map((row, idx) => (
      <TimeTableRow
        key={idx}
        daysOfWeek={weeks[idx]}
        appointmentsList={filterdAppointments[idx]}
        thisMonth={thisMonth}
        {...props}
      />
    ));

  return <div className={classes['timetable-layout']}>{timeTableRowsList}</div>;
};

export default TimeTableLayout;
