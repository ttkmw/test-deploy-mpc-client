import TimeTableCell from './TimeTableCell';
import classes from './TimeTableRow.module.css';

const TimeTableRow = (props) => {
  const { excludedDays = null, appointmentsList } = props;

  const cellsData = Array(7).fill();

  appointmentsList.forEach((appointment) => {
    cellsData[new Date(appointment.date).getDay()] = appointment;
  });

  const timeTableCellsList = Array(7)
    .fill()
    .map((cell, idx) => (
      <TimeTableCell key={idx} cellData={cellsData[idx]} {...props} />
    ));

  return (
    <div className={classes['timetable-row']}>
      {excludedDays === null
        ? timeTableCellsList
        : timeTableCellsList.filter((cell, idx) => !excludedDays.includes(idx))}
    </div>
  );
};

export default TimeTableRow;
