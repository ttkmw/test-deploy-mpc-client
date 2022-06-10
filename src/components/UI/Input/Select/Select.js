import ChevronLeft from '../../Icons/Chevron/ChevronLeft';
import classes from './Select.module.css';

const Select = (props) => {
  const { placeholder = null, className } = props;

  return (
    <div className={classes['form-control--select']}>
      <select
        {...props.attribute}
        className={`${classes['form-control--select__select']} ${
          placeholder ? classes['has-placeholder'] : ''
        }`}
      >
        {placeholder && (
          <option value='' disabled hidden>
            {placeholder}
          </option>
        )}
        {props.options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
      <i className={classes['form-control--select__select--icon']}>
        <ChevronLeft />
      </i>
    </div>
  );
};

export default Select;
