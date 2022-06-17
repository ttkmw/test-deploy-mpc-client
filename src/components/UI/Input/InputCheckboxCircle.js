import classes from './InputCheckboxCircle.module.css';

const InputCheckboxCircle = (props) => {
  const { attribute } = props;
  return (
    <label htmlFor={attribute.id} className={classes['input--label-checkbox']}>
      <input
        type='checkbox'
        className={classes['input--checkbox']}
        {...attribute}
      />
      <span className={classes['input--checkbox--text']}>{props.children}</span>
    </label>
  );
};

export default InputCheckboxCircle;
