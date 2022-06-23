import ChevronLeft from '../../Icons/Chevron/ChevronLeft';
import classes from './Select.module.css';

const Select = (props) => {
  const { attribute, placeholder, classList = [] } = props;
  const className = `${classes['form-control--select']} ${classList
    .map((item) => classes[item])
    .join(' ')}`;

  return (
    <div className={className}>
      <select
        {...attribute}
        className={`${classes['form-control--select__input']} ${
          attribute.value ? '' : classes['has-placeholder']
        }`}
      >
        {!attribute.value && (
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
      <i className={classes['form-control--select__icon']}>
        <ChevronLeft />
      </i>
    </div>
  );
};

export default Select;
