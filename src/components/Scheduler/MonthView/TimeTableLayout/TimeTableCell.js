import { useState } from 'react';

import Appointment from '../Appointment/Appointment';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';
import classes from './TimeTableCell.module.css';

const TimeTableCell = (props) => {
  const { date, thisMonth, isSunday, cellData } = props;
  const [formIsShown, setFormIsShown] = useState(false);

  const isToday =
    date.toLocaleDateString() === new Date().toLocaleDateString()
      ? classes.today
      : '';

  const isThisMonth =
    thisMonth.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    }) ===
    date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    })
      ? ''
      : classes.blur;

  const isNotSunday = !isSunday ? '' : classes.sun;

  const classList = `${classes['timetable-cell']} ${isToday} ${isThisMonth} ${isNotSunday}`;

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  return (
    <div className={classList}>
      <div
        className={classes['timetable-cell__inner']}
        onClick={showFormHandler}
      >
        <div className={classes['timetable-cell__date']}>{date.getDate()}</div>
        {!cellData.length || (
          <ul className={classes['timetable-cell__data']}>
            <Appointment appointment={cellData} {...props} />
          </ul>
        )}
      </div>
      {formIsShown && <AppointmentForm onClose={hideFormHandler} {...props} />}
    </div>
  );
};

export default TimeTableCell;
