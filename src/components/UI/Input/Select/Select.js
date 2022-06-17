import ChevronLeft from '../../Icons/Chevron/ChevronLeft';
import classes from './Select.module.css';

const Select = (props) => {
  const { attribute, placeholder = '' } = props;

  return (
    <div className={classes['form-control--select']}>
      <select
        className={`${classes['form-control--select__select']} ${
          attribute.value === '' ? classes['has-placeholder'] : ''
        }`}
        {...attribute}
      >
        {attribute.value === '' && (
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
