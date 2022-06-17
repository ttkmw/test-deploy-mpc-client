import classes from './InputDate.module.css';

const DEFAULT_DATE = new Date();

const InputDate = (props) => {
  const { enteredDate = DEFAULT_DATE, attribute } = props;

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
        className={classes['form-control--date__input']}
        value={dateVal}
        {...attribute}
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
