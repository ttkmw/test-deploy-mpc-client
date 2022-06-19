import { useState } from 'react';

import Appointment from '../Appointment/Appointment';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';
import classes from './TimeTableCell.module.css';

const TimeTableCell = (props) => {
  const { cellData = null, date } = props;
  const [formIsShown, setFormIsShown] = useState(false);

  const isToday =
    date.toLocaleDateString() === new Date().toLocaleDateString()
      ? classes.today
      : '';

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  if (cellData) {
    return (
      <div className={`${classes['timetable-cell']} ${isToday}`}>
        <div className={classes['timetable-cell__inner']}>
          <Appointment appointment={cellData} />
        </div>
      </div>
    );
  }

  return (
    <div className={`${classes['timetable-cell']} ${isToday}`}>
      <div
        className={classes['timetable-cell__inner']}
        onClick={showFormHandler}
      ></div>
      {formIsShown && <AppointmentForm onClose={hideFormHandler} {...props} />}
    </div>
  );
};

export default TimeTableCell;
