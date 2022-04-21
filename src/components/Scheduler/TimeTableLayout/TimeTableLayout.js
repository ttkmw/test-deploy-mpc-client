import TimeTableRow from './TimeTableRow';

const TimeTableLayout = (props) => {
  const { startDayHour, endDayHour } = props;

  const timeTableRowsList = Array(endDayHour - startDayHour)
    .fill()
    .map((row, idx) => <TimeTableRow key={idx} {...props} />);

  return (
    <table>
      <tbody>{timeTableRowsList}</tbody>
    </table>
  );
};

export default TimeTableLayout;
