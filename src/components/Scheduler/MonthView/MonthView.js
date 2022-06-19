import SchedulerHeader from '../SchedulerLayout/SchedulerHeader/SchedulerHeader';
import SchedulerBody from '../SchedulerLayout/SchedulerBody/SchedulerBody';
import DayScaleLayout from './DayScaleLayout/DayScaleLayout';
import TimeTableLayout from './TimeTableLayout/TimeTableLayout';

const MonthView = (props) => {
  if (props.schedulerDate.viewState) {
    return null;
  }
  return (
    <div>
      <SchedulerHeader>
        <DayScaleLayout {...props} />
      </SchedulerHeader>
      <SchedulerBody>
        <TimeTableLayout {...props} />
      </SchedulerBody>
    </div>
  );
};

export default MonthView;
