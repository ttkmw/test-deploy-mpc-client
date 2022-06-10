import classes from './InputRadio.module.css';

const InputRadio = (props) => {
  return (
    <label
      htmlFor={props.attribute.id}
      className={classes['input--label-radio']}
    >
      <input
        type='radio'
        {...props.attribute}
        className={classes['input--radio']}
      />
      <span className={classes['input--radio--text']}>{props.children}</span>
    </label>
  );
};

export default InputRadio;
