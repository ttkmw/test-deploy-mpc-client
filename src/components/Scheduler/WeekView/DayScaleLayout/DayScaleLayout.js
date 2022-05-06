import DayScaleEmpty from './DayScaleEmpty';
import DayScaleWrap from './DayScaleWrap/DayScaleWrap';
import classes from './DayScaleLayout.module.css';

const DayScaleLayout = (props) => {
  return (
    <div className={classes['dayscale-layout']}>
      <DayScaleEmpty />
      <DayScaleWrap {...props} />
    </div>
  );
};

export default DayScaleLayout;
