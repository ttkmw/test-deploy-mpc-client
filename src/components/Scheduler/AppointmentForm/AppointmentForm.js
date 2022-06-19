import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import ToggleBtn from '../../UI/Input/ToggleBtn/ToggleBtn';
import InputRadio from '../../UI/Input/InputRadio';
import InputCheckboxCircle from '../../UI/Input/InputCheckboxCircle';
import Modal from '../../UI/Modal/Modal';
import InputText from '../../UI/Input/InputText';
import InputDate from '../../UI/Input/InputDate';
import InputPrice from '../../UI/Input/InputPrice';
import Select from '../../UI/Input/Select/Select';
import Textarea from '../../UI/Input/Textarea/Textarea';
import classes from './AppointmentForm.module.css';
import AuthContext from '../../../store/auth-context';

const getMinimumDateVal = (date) => {
  const minimumDateVal = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  return `${minimumDateVal.getFullYear()}-${
    minimumDateVal.getMonth() < 9
      ? `0${minimumDateVal.getMonth() + 1}`
      : minimumDateVal.getMonth() + 1
  }-${
    minimumDateVal.getDate() < 10
      ? `0${minimumDateVal.getDate()}`
      : minimumDateVal.getDate()
  }`;
};

const getMaximumDateVal = (date) => {
  const maximumDateVal = new Date(
    date.getFullYear(),
    date.getMonth() + 3,
    date.getDate()
  );

  return `${maximumDateVal.getFullYear()}-${
    maximumDateVal.getMonth() < 9
      ? `0${maximumDateVal.getMonth() + 1}`
      : maximumDateVal.getMonth() + 1
  }-${
    maximumDateVal.getDate() < 10
      ? `0${maximumDateVal.getDate()}`
      : maximumDateVal.getDate()
  }`;
};

const DAYS_OF_WEEK = [
  { dayId: 'opt-sun', day: '일' },
  { dayId: 'opt-mon', day: '월' },
  { dayId: 'opt-tue', day: '화' },
  { dayId: 'opt-wed', day: '수' },
  { dayId: 'opt-thu', day: '목' },
  { dayId: 'opt-fri', day: '금' },
  { dayId: 'opt-sat', day: '토' },
];

const timeOptions = () => {
  let options = [];

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      options.push(`${i < 10 ? `0${i}` : i}:${j === 0 ? '00' : '30'}`);
    }
  }
  return options;
};

const AppointmentForm = (props) => {
  const params = useParams();
  const authCtx = useContext(AuthContext);
  const { date, schedulerDate, onChangeSchedulerDate, adjDateFormat } = props;
  const defaultStartTime = `${date.toTimeString().split(':')[0]}:${
    date.toTimeString().split(':')[1]
  }`;
  const defaultEndTime = `${
    new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours() + 2,
      0
    )
      .toTimeString()
      .split(':')[0]
  }:${date.toTimeString().split(':')[1]}`;
  const [enteredProductType, setEnteredProductType] = useState('');
  const [enteredDate, setEnteredDate] = useState(date);
  const [enteredStartTime, setEnteredStartTime] = useState(defaultStartTime);
  const [enteredEndTime, setEnteredEndTime] = useState(defaultEndTime);
  const [isRepeatOpt, setIsRepeatOpt] = useState(false);
  const [enteredRepeatEndDate, setEnteredRepeatEndDate] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
  );
  const [enteredRepeatCount, setEnteredRepeatCount] = useState('4회');
  const [selectedRepeatOpt, setSelectedRepeatOpt] = useState(true);
  const [enteredPrice, setEnteredPrice] = useState('100,000');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPhoneNum, setEnteredPhoneNum] = useState('');
  const [enteredNote, setEnteredNote] = useState('');

  const submitHandler = (evt) => {
    evt.preventDefault();
    const selectedDays = [];
    Array.from(document.querySelectorAll('input[name="repeat-day"]')).forEach(
      (day, idx) => {
        if (day.checked) {
          selectedDays.push(idx);
        }
      }
    );

    const date = adjDateFormat(enteredDate);
    const repeatEndDate = adjDateFormat(enteredRepeatEndDate);
    const price = Number(enteredPrice.replaceAll(',', ''));

    if (!isRepeatOpt) {
      fetch('https://dev.plab.so/products', {
        method: 'POST',
        body: JSON.stringify({
          productType: enteredProductType,
          date,
          time: {
            startTime: `${date}T${enteredStartTime}`,
            endTime: `${date}T${enteredEndTime}`,
          },
          price,
          consumer: enteredName,
          phoneNum: enteredPhoneNum,
          note: enteredNote,
          zoneId: +params.zoneId,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then((data) => {
            throw new Error(data.message);
          });
        })
        .then((data) => {
          props.onClose();
          if (schedulerDate.viewState === false) {
            onChangeSchedulerDate({
              type: 'CUR_MONTH',
              value: new Date(date),
            });
          } else {
            onChangeSchedulerDate({
              type: 'CUR_WEEK',
              value: new Date(date),
            });
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    if (isRepeatOpt) {
      fetch('https://dev.plab.so/products/weeks', {
        method: 'POST',
        body: JSON.stringify({
          productType: enteredProductType,
          date,
          time: {
            startTime: `${date}T${enteredStartTime}`,
            endTime: `${date}T${enteredEndTime}`,
          },
          repeatOpt: {
            type: 'weeks',
            daysOfWeek: selectedDays,
            endDate: selectedRepeatOpt ? repeatEndDate : null,
            repeatCount: !selectedRepeatOpt
              ? enteredRepeatCount.slice(0, -1)
              : null,
          },
          price,
          consumer: enteredName,
          phoneNum: enteredPhoneNum,
          note: enteredNote,
          zoneId: +params.zoneId,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then((data) => {
            throw new Error(data.message);
          });
        })
        .then((data) => {
          props.onClose();
          if (schedulerDate.viewState === false) {
            onChangeSchedulerDate({
              type: 'CUR_MONTH',
              value: new Date(date),
            });
          } else {
            onChangeSchedulerDate({
              type: 'CUR_WEEK',
              value: new Date(date),
            });
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const changeProductTypeHandler = (evt) => {
    setEnteredProductType(evt.target.value);
  };

  const changeDateHandler = (evt) => {
    if (evt.target.value === '') {
      setEnteredDate('');
      return;
    }
    setEnteredDate(new Date(evt.target.value));
  };

  const changeStartTimeHandler = (evt) => {
    setEnteredStartTime(evt.target.value);
  };

  const changeEndTimeHandler = (evt) => {
    setEnteredEndTime(evt.target.value);
  };

  const changeRepeatOtpHandler = () => {
    setIsRepeatOpt((prevState) => !prevState);
  };

  const changeSelectedRepeatOpt = (evt) => {
    setSelectedRepeatOpt((prevState) => !prevState);
  };

  const changeRepeatEndDateHandler = (evt) => {
    if (evt.target.value === '') {
      setEnteredRepeatEndDate('');
      return;
    }
    setEnteredRepeatEndDate(new Date(evt.target.value));
  };

  const changeRepeatCountHandler = (evt) => {
    setEnteredRepeatCount(evt.target.value);
  };

  const changePriceHandler = (evt) => {
    setEnteredPrice(evt.target.value);
  };

  const changeNameHandler = (evt) => {
    setEnteredName(evt.target.value);
  };

  const changePhoneNumHandler = (evt) => {
    setEnteredPhoneNum(evt.target.value);
  };

  const changeNoteHandler = (evt) => {
    setEnteredNote(evt.target.value);
  };

  return (
    <Modal title={'일정 등록'} onClose={props.onClose}>
      <form className={classes['appointment-form']} onSubmit={submitHandler}>
        <div className={classes['form-row']}>
          <div className={classes['form-control--label']}>
            <label htmlFor='product-type'>타입</label>
          </div>
          <div className={classes['form-control--input']}>
            <Select
              attribute={{
                id: 'product-type',
                autoFocus: 'autoFocus',
                value: enteredProductType,
                onChange: changeProductTypeHandler,
              }}
              options={[
                '구장직접',
                '장기대관',
                '아카데미',
                '예약가능',
                '예약불가',
              ]}
              placeholder='대관타입'
            />
          </div>
        </div>
        <div className={classes['form-row']}>
          <div className={classes['form-control--label']}>
            <label htmlFor='schedule-date'>일정</label>
          </div>
          <div className={classes['form-control--input']}>
            <InputDate
              attribute={{
                id: 'schedule-date',
                value: enteredDate,
                onChange: changeDateHandler,
              }}
            />
          </div>
        </div>
        <div className={classes['form-row']}>
          <div
            className={`${classes['form-control--label']} ${classes['hidden']}`}
          >
            <label>시간</label>
          </div>
          <div
            className={`${classes['form-control--input']} ${classes.inline}`}
          >
            <Select
              attribute={{
                value: enteredStartTime,
                onChange: changeStartTimeHandler,
              }}
              options={timeOptions()}
            />
            ~
            <Select
              attribute={{
                value: enteredEndTime,
                onChange: changeEndTimeHandler,
              }}
              options={timeOptions()}
            />
          </div>
        </div>
        <div className={classes['form-row']}>
          <div className={classes['form-control--label']}>
            <label htmlFor='is-repeat'>반복</label>
          </div>
          <div
            className={`${classes['form-control--input']} ${classes['justify-end']}`}
          >
            <ToggleBtn
              attribute={{
                id: 'is-repeat',
                onClick: changeRepeatOtpHandler,
                defaultChecked: isRepeatOpt,
              }}
            />
          </div>
        </div>
        <div
          className={`${classes['form-rows--toggle']} ${
            isRepeatOpt ? classes.visible : ''
          }`}
        >
          <div className={classes['form-row']}>
            <div
              className={`${classes['form-control--label']} ${classes['hidden']}`}
            >
              <label htmlFor='is-repeat'>반복 일정 복제할 요일</label>
            </div>
            <div
              className={`${classes['form-control--input']} ${classes.inline} ${classes['justify-end']}`}
            >
              {DAYS_OF_WEEK.map((dayOfWeek, idx) => (
                <InputCheckboxCircle
                  key={idx}
                  attribute={{
                    name: 'repeat-day',
                    id: dayOfWeek.dayId,
                    defaultChecked:
                      enteredDate && enteredDate.getDay() === idx
                        ? true
                        : false,
                    disabled:
                      enteredDate && enteredDate.getDay() === idx
                        ? 'disabled'
                        : '',
                    tabIndex:
                      enteredDate && enteredDate.getDay() === idx ? '-1' : '',
                  }}
                >
                  {dayOfWeek.day}
                </InputCheckboxCircle>
              ))}
            </div>
          </div>
          <div className={classes['form-row']}>
            <div
              className={`${classes['form-control--label']} ${classes['hidden']}`}
            >
              <label htmlFor='is-repeat'>일정 반복 종료일</label>
            </div>
            <div
              className={`${classes['form-control--input']} ${classes['repeat-opt']} ${classes.inline}`}
            >
              <InputRadio
                attribute={{
                  id: 'end-date',
                  name: 'repeat-option',
                  onClick: selectedRepeatOpt ? null : changeSelectedRepeatOpt,
                  defaultChecked: true,
                }}
              >
                종료일
              </InputRadio>
              <InputDate
                attribute={{
                  min: enteredDate && getMinimumDateVal(enteredDate),
                  max: enteredDate && getMaximumDateVal(enteredDate),
                  value: enteredRepeatEndDate,
                  onChange: changeRepeatEndDateHandler,
                  disabled: selectedRepeatOpt ? '' : true,
                }}
              />
            </div>
          </div>
          <div className={classes['form-row']}>
            <div
              className={`${classes['form-control--label']} ${classes['hidden']}`}
            >
              <label htmlFor='is-repeat'>일정 반복 횟수</label>
            </div>
            <div
              className={`${classes['form-control--input']} ${classes['repeat-opt']} ${classes.inline}`}
            >
              <InputRadio
                attribute={{
                  id: 'repeat-count',
                  name: 'repeat-option',
                  onClick: !selectedRepeatOpt ? null : changeSelectedRepeatOpt,
                }}
              >
                횟수
              </InputRadio>
              <Select
                attribute={{
                  value: enteredRepeatCount,
                  onChange: changeRepeatCountHandler,
                  disabled: !selectedRepeatOpt ? '' : true,
                }}
                options={Array(12)
                  .fill()
                  .map((count, idx) => `${idx + 1}회`)}
              />
            </div>
          </div>
        </div>
        {enteredProductType !== '예약불가' && (
          <div className={classes['form-row']}>
            <div className={classes['form-control--label']}>
              <label htmlFor='product-price'>가격</label>
            </div>
            <div className={classes['form-control--input']}>
              <InputPrice
                attribute={{
                  id: 'product-price',
                  value: enteredPrice,
                  onChange: changePriceHandler,
                  autoComplete: 'off',
                }}
              />
            </div>
          </div>
        )}
        {enteredProductType !== '예약가능' &&
          enteredProductType !== '예약불가' && (
            <div className={classes['form-row']}>
              <div className={classes['form-control--label']}>
                <label htmlFor='consumer-name'>대관자</label>
              </div>
              <div className={classes['form-control--input']}>
                <InputText
                  attribute={{
                    type: 'text',
                    id: 'consumer-name',
                    value: enteredName,
                    onChange: changeNameHandler,
                    placeholder: '이름',
                    autoComplete: 'off',
                  }}
                />
              </div>
            </div>
          )}
        {enteredProductType !== '예약가능' &&
          enteredProductType !== '예약불가' && (
            <div className={classes['form-row']}>
              <div className={classes['form-control--label']}>
                <label htmlFor='phone-number'>연락처</label>
              </div>
              <div className={classes['form-control--input']}>
                <InputText
                  attribute={{
                    type: 'text',
                    id: 'phone-number',
                    value: enteredPhoneNum,
                    onChange: changePhoneNumHandler,
                    placeholder: '연락처',
                    autoComplete: 'off',
                  }}
                />
              </div>
            </div>
          )}
        {enteredProductType !== '예약가능' && (
          <div
            className={`${classes['form-row']} ${classes['form-row--textarea']}`}
          >
            <div className={classes['form-control--label']}>
              <label htmlFor='etc-note'>메모</label>
            </div>
            <div
              className={`${classes['form-control--input']} ${classes.textarea}`}
            >
              <Textarea
                attribute={{
                  id: 'etc-note',
                  value: enteredNote,
                  onChange: changeNoteHandler,
                  placeholder: '기타',
                }}
              />
            </div>
          </div>
        )}

        <div className={classes['form-actions']}>
          <button type='submit'>등록</button>
        </div>
      </form>
    </Modal>
  );
};

export default AppointmentForm;
