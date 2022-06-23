import classes from './InputPrice.module.css';

const InputPrice = (props) => {
  const { attribute, classList = [] } = props;
  const className = `${classes['form-control--price']} ${classList
    .map((item) => classes[item])
    .join(' ')}`;

  let value = attribute.value;
  value = Number(value.replaceAll(',', ''));
  if (isNaN(value)) {
    value = 0;
  } else {
    value = value.toLocaleString('ko-KR');
  }

  return (
    <div className={className}>
      <input
        type='text'
        {...attribute}
        className={classes['form-control--price__input']}
        value={value}
      />
      <div className={classes['form-control--price__text']}>{value}</div>
    </div>
  );
};

export default InputPrice;
