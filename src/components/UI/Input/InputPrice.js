import classes from './InputPrice.module.css';

const InputPrice = (props) => {
  const { attribute } = props;

  let value = attribute.value;
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
        {...attribute}
        value={value}
      />
      <div className={classes['form-control--price__text']}>{value}</div>
    </div>
  );
};

export default InputPrice;
