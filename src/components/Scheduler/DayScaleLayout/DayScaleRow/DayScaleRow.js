import DayScaleCell from './DayScaleCell';

import classes from './DayScaleRow.module.css';

const DayScaleRow = ({ excludedDays = null }) => {
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const dayScaleCellList = dayOfWeek.map((day, idx) => (
    <DayScaleCell
      key={idx}
      day={day}
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
