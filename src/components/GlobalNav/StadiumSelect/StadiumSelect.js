import ChevronLeft from '../../UI/Icons/Chevron/ChevronLeft';
import classes from './StadiumSelect.module.css';

const StadiumSelect = (props) => {
  return (
    <div className={classes['stadium-select']}>
      <select className={classes['stadium-select__select']}>
        <option>HM풋살파크 일산점</option>
      </select>
      <i className={classes['stadium-select__select--icon']}>
        <ChevronLeft size='small' />
      </i>
    </div>
  );
};

export default StadiumSelect;
