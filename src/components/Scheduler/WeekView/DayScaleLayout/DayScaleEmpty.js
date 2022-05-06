import classes from './DayScaleEmpty.module.css';

const DayScaleEmpty = (props) => {
  return (
    <div className={classes['dayscale-empty']}>
      <div className={classes['dayscale-empty__inner']}>&nbsp;</div>
    </div>
  );
};

export default DayScaleEmpty;
