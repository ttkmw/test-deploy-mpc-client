import SchedulerHeader from '../SchedulerLayout/SchedulerHeader/SchedulerHeader';
import SchedulerBody from '../SchedulerLayout/SchedulerBody/SchedulerBody';
import DayScaleLayout from '../DayScaleLayout/DayScaleLayout';
import TimeScaleLayout from '../TimeScaleLayout/TimeScaleLayout';
import TimeTableLayout from '../TimeTableLayout/TimeTableLayout';
import classes from './WeekView.module.css';

const WeekView = (props) => {
  return (
    <div className={classes.weekview}>
      <SchedulerHeader>
        <DayScaleLayout {...props} />
      </SchedulerHeader>
      <SchedulerBody>
        <TimeScaleLayout {...props} />
        <TimeTableLayout {...props} />
      </SchedulerBody>
    </div>
  );
};

export default WeekView;
