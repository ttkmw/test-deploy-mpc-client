import classes from './InputRadio.module.css';

const InputRadio = (props) => {
  const { attribute, classList = [] } = props;
  const className = `${classes['form-control--radio']} ${classList
    .map((item) => classes[item])
    .join(' ')}`;

  return (
    <label htmlFor={props.attribute.id} className={className}>
      <input
        type='radio'
        {...attribute}
        className={classes['form-control--radio__input']}
      />
      <span className={classes['form-control--radio__text']}>
        {props.children}
      </span>
    </label>
  );
};

export default InputRadio;
