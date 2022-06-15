import ChevronLeft from '../../UI/Icons/Chevron/ChevronLeft';
import classes from './StadiumSelect.module.css';

const StadiumSelect = (props) => {
  const { stadiumsList, onSaveZoneList } = props;

  return (
    <div className={classes['stadium-select']}>
      <select
        className={classes['stadium-select__select']}
        onChange={(evt) => onSaveZoneList(evt.target.value)}
      >
        {stadiumsList &&
          stadiumsList.map((stadium, idx) => (
            <option key={idx} value={stadium.id}>
              {stadium.name}
            </option>
          ))}
      </select>
      <i className={classes['stadium-select__select--icon']}>
        <ChevronLeft size='small' />
      </i>
    </div>
  );
};

export default StadiumSelect;
