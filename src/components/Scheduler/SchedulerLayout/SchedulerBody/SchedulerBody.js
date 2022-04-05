import classes from './SchedulerBody.module.css';

const SchedulerBody = ({ children }) => {
  return <div className={classes['scheduler-body']}>{children}</div>;
};

export default SchedulerBody;
