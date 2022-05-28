import classes from './Select.module.css';

const Select = (props) => {
  const { placeholder = null } = props;

  return (
    <select
      {...props.attribute}
      className={`${classes['form-control--select']} ${
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
  );
};

export default Select;
