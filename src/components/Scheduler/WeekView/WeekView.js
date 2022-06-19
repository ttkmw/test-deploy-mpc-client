import SchedulerHeader from '../SchedulerLayout/SchedulerHeader/SchedulerHeader';
import SchedulerBody from '../SchedulerLayout/SchedulerBody/SchedulerBody';
import DayScaleLayout from './DayScaleLayout/DayScaleLayout';
import TimeScaleLayout from './TimeScaleLayout/TimeScaleLayout';
import TimeTableLayout from './TimeTableLayout/TimeTableLayout';

const WeekView = (props) => {
  if (!props.schedulerDate.viewState) {
    return null;
  }
  return (
    <div>
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
