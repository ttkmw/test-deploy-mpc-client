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
      {props.children}
    </label>
  );
};

export default InputRadio;
