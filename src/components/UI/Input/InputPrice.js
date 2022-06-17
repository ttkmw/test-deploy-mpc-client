import classes from './InputPrice.module.css';

const InputPrice = (props) => {
  const { attribute, enteredPrice = 0 } = props;

  let value = enteredPrice;
  value = Number(value.replaceAll(',', ''));
  if (isNaN(value)) {
    value = 0;
  } else {
    value = value.toLocaleString('ko-KR');
  }

  return (
    <div className={classes['form-control--price']}>
      <input
        type='text'
        className={classes['form-control--price__input']}
        value={value}
        {...attribute}
      />
      <div className={classes['form-control--price__text']}>{value}</div>
    </div>
  );
};

export default InputPrice;
