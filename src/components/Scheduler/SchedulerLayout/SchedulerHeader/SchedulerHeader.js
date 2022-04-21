import classes from './SchedulerHeader.module.css';

const SchedulerHeader = ({ children }) => {
  return <div className={classes['scheduler-header']}>{children}</div>;
};

export default SchedulerHeader;
