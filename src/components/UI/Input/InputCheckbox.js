import classes from './InputCheckbox.module.css';

const InputCheckbox = (props) => {
  return (
    <label
      htmlFor={props.attribute.id}
      className={classes['input--label-checkbox']}
    >
      <input
        type='checkbox'
        {...props.attribute}
        className={classes['input--checkbox']}
      />
      <span className={classes['input--checkbox--text']}>{props.children}</span>
    </label>
  );
};

export default InputCheckbox;
