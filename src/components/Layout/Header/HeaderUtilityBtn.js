import Headset from '../../UI/Icons/Headset/Headset';
import classes from './HeaderUtilityBtn.module.css';

const HeaderUtilityBtn = (props) => {
  return (
    <button type='button' className={classes['utility-btn']}>
      <Headset />
    </button>
  );
};

export default HeaderUtilityBtn;
