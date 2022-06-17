import classes from './InputRadio.module.css';

const InputRadio = (props) => {
  const { attribute } = props;
  return (
    <label
      htmlFor={props.attribute.id}
      className={classes['input--label-radio']}
    >
      <input type='radio' className={classes['input--radio']} {...attribute} />
      <span className={classes['input--radio--text']}>{props.children}</span>
    </label>
  );
};

export default InputRadio;
