import classes from './InputDate.module.css';

const InputDate = (props) => {
  const { attribute, classList = [] } = props;
  const className = `${classes['form-control--date']} ${classList
    .map((item) => classes[item])
    .join(' ')}`;

  const dateVal =
    attribute.value &&
    `${attribute.value.getFullYear()}-${
      attribute.value.getMonth() < 9
        ? `0${attribute.value.getMonth() + 1}`
        : attribute.value.getMonth() + 1
    }-${
      attribute.value.getDate() < 10
        ? `0${attribute.value.getDate()}`
        : attribute.value.getDate()
    }`;

  const dateTxt =
    attribute.value &&
    attribute.value.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

  return (
    <div className={className}>
      <input
        type='date'
        {...attribute}
        className={classes['form-control--date__input']}
        value={dateVal}
      />
      <div className={classes['form-control--date__text']}>{dateTxt}</div>
    </div>
  );
};

export default InputDate;
