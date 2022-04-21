import { Fragment } from 'react';
import DayScaleRow from './DayScaleRow/DayScaleRow';
import classes from './DayScaleLayout.module.css';

const DayScaleLayout = (props) => {
  return (
    <Fragment>
      <div className={classes['dayscale-cell-empty']}>
        <div>{null}</div>
      </div>
      <table>
        <tbody>
          <DayScaleRow {...props} />
        </tbody>
      </table>
    </Fragment>
  );
};

export default DayScaleLayout;
