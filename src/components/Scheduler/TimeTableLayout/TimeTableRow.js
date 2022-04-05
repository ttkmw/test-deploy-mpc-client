import TimeTableCell from './TimeTableCell';

const TimeTableRow = (props) => {
  const { excludedDays = [] } = props;

  const timeTableCellsList = Array(7 - excludedDays.length)
    .fill()
    .map((row, idx) => <TimeTableCell key={idx} {...props} />);

  return <tr>{timeTableCellsList}</tr>;
};

export default TimeTableRow;
