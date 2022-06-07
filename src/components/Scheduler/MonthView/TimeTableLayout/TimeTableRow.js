import TimeTableCell from './TimeTableCell';
import classes from './TimeTableRow.module.css';

const TimeTableRow = (props) => {
  const { excludedDays = null, daysOfWeek, appointmentsList } = props;
  const cellsData = Array(7)
    .fill()
    .map((cell) => []);

  appointmentsList.forEach((appointment) => {
    for (let idx in daysOfWeek) {
      if (new Date(appointment.date).getDate() === daysOfWeek[idx].getDate()) {
        cellsData[idx].push(appointment);
      }
    }
  });

  const timeTableCellsList = Array(7)
    .fill()
    .map((cell, idx) => (
      <TimeTableCell
        key={idx}
        date={daysOfWeek[idx]}
        cellData={cellsData[idx]}
        isSunday={idx === 0}
        {...props}
      />
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
