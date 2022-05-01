import DayScaleCell from './DayScaleCell';

import classes from './DayScaleRow.module.css';

const DayScaleRow = (props) => {
  const { excludedDays = null, daysOfWeek } = props;

  const dayScaleCellList = daysOfWeek.map((date, idx) => (
    <DayScaleCell
      key={idx}
      date={date}
      className={idx === 0 ? 'sun' : idx === 6 ? 'sat' : ''}
    />
  ));

  return (
    <tr className={classes['dayscale-row']}>
      {excludedDays === null
        ? dayScaleCellList
        : dayScaleCellList.filter((day, idx) => !excludedDays.includes(idx))}
    </tr>
  );
};

export default DayScaleRow;
