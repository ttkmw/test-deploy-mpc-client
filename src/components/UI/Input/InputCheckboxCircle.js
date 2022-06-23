import classes from './InputCheckboxCircle.module.css';

const InputCheckboxCircle = (props) => {
  const { attribute, classList = [] } = props;
  const className = `${classes['form-control--checkbox-circle']} ${classList
    .map((item) => classes[item])
    .join(' ')}`;

  return (
    <label htmlFor={attribute.id} className={className}>
      <input
        type='checkbox'
        {...attribute}
        className={classes['form-control--checkbox-circle__input']}
      />
      <span className={classes['form-control--checkbox-circle__text']}>
        {props.children}
      </span>
    </label>
  );
};

export default InputCheckboxCircle;
