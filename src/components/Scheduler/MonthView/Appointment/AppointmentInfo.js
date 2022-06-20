import { useState } from 'react';

import ModifyForm from '../../ModifyForm/ModifyForm';
import classes from './AppointmentInfo.module.css';

const AppointmentInfo = (props) => {
  const { appointmentInfo } = props;
  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  return (
    <div
      className={classes['appointment-info']}
      data-product-type={appointmentInfo.productType}
      onClick={(evt) => evt.stopPropagation()}
    >
      <div
        className={classes['appointment-info__inner']}
        onClick={showFormHandler}
      >
        <div className={classes['appointment-info__time']}>
          {appointmentInfo.time.startTime.split('T')[1].slice(0, 5)}
          <span className={classes['appointment-info__time--tilde']}>~</span>
          <span className={classes['appointment-info__time--end-time']}>
            {appointmentInfo.time.endTime.split('T')[1].slice(0, 5)}
          </span>
        </div>
        <div className={classes['appointment-info__consumer']}>
          {appointmentInfo.consumer}
        </div>
      </div>
      {formIsShown && <ModifyForm {...props} onClose={hideFormHandler} />}
    </div>
  );
};

export default AppointmentInfo;
