import classes from './InputDate.module.css';

const DEFAULT_DATE = new Date();

const InputDate = (props) => {
  const { enteredDate = DEFAULT_DATE, onChangeDate = () => {} } = props;

  const dateTxt =
    enteredDate &&
    enteredDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

  const dateVal =
    enteredDate &&
    `${enteredDate.getFullYear()}-${
      enteredDate.getMonth() < 9
        ? `0${enteredDate.getMonth() + 1}`
        : enteredDate.getMonth() + 1
    }-${
      enteredDate.getDate() < 10
        ? `0${enteredDate.getDate()}`
        : enteredDate.getDate()
    }`;

  return (
    <div className={classes['form-control--date']}>
      <input
        type='date'
        value={dateVal}
        onChange={onChangeDate}
        {...props.attribute}
        className={classes['form-control--date__input']}
      />
      <input
        type='text'
        value={dateTxt === '' ? '----년 --월 --일' : dateTxt}
        readOnly
        tabIndex='-1'
        {...props.attribute}
        className={`${classes['form-control--date__text']} ${
          dateTxt === '' ? classes.empty : ''
        }`}
      />
    </div>
  );
};

export default InputDate;
