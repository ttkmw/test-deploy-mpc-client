import classes from './InputDate.module.css';

const InputDate = (props) => {
  const { attribute } = props;

  const dateTxt =
    attribute.value &&
    attribute.value.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
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

  return (
    <div className={classes['form-control--date']}>
      <input
        type='date'
        className={classes['form-control--date__input']}
        {...attribute}
        value={dateVal}
      />
      <div
        className={`${classes['form-control--date__text']} ${
          dateTxt === '' ? classes.empty : ''
        }`}
      >
        {dateTxt === '' ? '----년 --월 --일' : dateTxt}
      </div>
    </div>
  );
};

export default InputDate;
