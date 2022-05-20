import TimeTableRow from './TimeTableRow';
import TimeIndicator from './TimeIndicator/TimeIndicator';
import classes from './TimeTableLayout.module.css';

const TimeTableLayout = (props) => {
  const { startDayHour = 0, endDayHour = 24, schedulerDate, data = [] } = props;

  const filterdAppointments = Array(24)
    .fill()
    .map((row) => []);

  data.forEach((appointment) => {
    const startTime = new Date(appointment.time.startTime).getHours();

    if (
      schedulerDate.date[0] <= new Date(`${appointment.date}T00:00`) &&
      schedulerDate.date[schedulerDate.date.length - 1] >=
        new Date(`${appointment.date}T00:00`)
    ) {
      filterdAppointments[startTime].push(appointment);
    }
  });

  const timeTableRowsList = Array(24)
    .fill()
    .map((row, idx) => (
      <TimeTableRow
        key={idx}
        appointmentsList={filterdAppointments[idx]}
        {...props}
      />
    ));

  return (
    <div className={classes['timetable-layout']}>
      {timeTableRowsList.filter(
        (row, idx) => startDayHour <= idx && endDayHour >= idx
      )}
      <TimeIndicator />
    </div>
  );
};

export default TimeTableLayout;
