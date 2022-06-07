import Bars from '../../UI/Icons/Bars/Bars';
import classes from './HeaderHamburgerBtn.module.css';

const HeaderHamburgerBtn = () => {
  return (
    <button type='button' className={classes['hamburger-btn']}>
      <Bars />
    </button>
  );
};

export default HeaderHamburgerBtn;
