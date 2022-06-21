import { useState, useContext } from 'react';

import Modal from '../../UI/Modal/Modal';
import OptionalForm from '../OptionalForm/OptionalForm';
import InputText from '../../UI/Input/InputText';
import InputDate from '../../UI/Input/InputDate';
import InputPrice from '../../UI/Input/InputPrice';
import Select from '../../UI/Input/Select/Select';
import Textarea from '../../UI/Input/Textarea/Textarea';
import classes from './ModifyForm.module.css';
import AuthContext from '../../../store/auth-context';

const timeOptions = () => {
  let options = [];

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      options.push(`${i < 10 ? `0${i}` : i}:${j === 0 ? '00' : '30'}`);
    }
  }
  return options;
};

const ModifyForm = (props) => {
  const authCtx = useContext(AuthContext);
  const {
    date,
    schedulerDate,
    onChangeSchedulerDate,
    adjDateFormat,
    appointmentInfo,
  } = props;

  const appointmentStartTime = new Date(appointmentInfo.time.startTime);
  const appointmentEndTime = new Date(appointmentInfo.time.endTime);
  const defaultStartTime = `${
    appointmentStartTime.toTimeString().split(':')[0]
  }:${appointmentStartTime.toTimeString().split(':')[1]}`;
  const defaultEndTime = `${
    new Date(
      appointmentEndTime.getFullYear(),
      appointmentEndTime.getMonth(),
      appointmentEndTime.getDate(),
      appointmentEndTime.getHours(),
      0
    )
      .toTimeString()
      .split(':')[0]
  }:${appointmentEndTime.toTimeString().split(':')[1]}`;

  const [enteredProductType, setEnteredProductType] = useState(
    appointmentInfo.productType
  );
  const [enteredDate, setEnteredDate] = useState(
    new Date(appointmentInfo.date)
  );
  const [enteredStartTime, setEnteredStartTime] = useState(defaultStartTime);
  const [enteredEndTime, setEnteredEndTime] = useState(defaultEndTime);

  const isRepeatOpt = appointmentInfo.isRepeat;
  const enteredDateText =
    isRepeatOpt &&
    new Date(appointmentInfo.date).toLocaleDateString('ko-KR', {
      weekday: 'long',
    });
  const enteredRepeatEndDate =
    isRepeatOpt &&
    new Date(appointmentInfo.repeatOpt.endDate).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const [enteredPrice, setEnteredPrice] = useState(
    appointmentInfo.price ? appointmentInfo.price.toLocaleString('ko-KR') : ''
  );
  const [enteredName, setEnteredName] = useState(appointmentInfo.consumer);
  const [enteredPhoneNum, setEnteredPhoneNum] = useState(
    appointmentInfo.phoneNum
  );
  const [enteredNote, setEnteredNote] = useState(appointmentInfo.note);

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

  const [optionalFormIsShown, setOptionalFormIsShown] = useState(false);
  const [optionalFormType, setOptionalFormType] = useState('');

  const showOptionalForm = () => {
    setOptionalFormIsShown((prevState) => !prevState);
  };

  const resetOptionalFormTypeHandler = () => {
    setOptionalFormType('');
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (evt.nativeEvent.submitter.innerText === '일정 취소') {
      if (!isRepeatOpt) {
        fetch(`https://dev.plab.so/products/${appointmentInfo.id}/once`, {
          method: 'DELETE',
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
        props.onClose();
      }

      if (isRepeatOpt) {
        setOptionalFormIsShown((prevState) => !prevState);
        setOptionalFormType('일정 취소');
      }
    }

    if (evt.nativeEvent.submitter.innerText === '수정') {
      if (!isRepeatOpt) {
        fetch(`https://dev.plab.so/products/${appointmentInfo.id}/once`, {
          method: 'PUT',
          body: JSON.stringify({
            productType: enteredProductType,
            time: {
              startTime: `${adjDateFormat(enteredDate)}T${enteredStartTime}`,
              endTime: `${adjDateFormat(enteredDate)}T${enteredEndTime}`,
            },
            consumer: enteredName,
            price: Number(enteredPrice.replaceAll(',', '')),
            phoneNum: enteredPhoneNum,
            note: enteredNote,
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
            if (!schedulerDate.viewState) {
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
        props.onClose();
      }

      if (isRepeatOpt) {
        setOptionalFormIsShown((prevState) => !prevState);
        setOptionalFormType('수정');
      }
    }
  };

  return (
    <Modal title={'일정 확인'} onClose={props.onClose}>
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
                disabled:
                  enteredProductType === '플랩대관' ||
                  enteredProductType === '소셜매치'
                    ? true
                    : false,
              }}
              options={
                enteredProductType === '플랩대관' ||
                enteredProductType === '소셜매치'
                  ? ['플랩대관', '소셜매치']
                  : ['구장직접', '장기대관', '아카데미', '예약가능', '예약불가']
              }
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
                onChange: changeDateHandler,
                value: enteredDate,
                disabled:
                  enteredProductType === '플랩대관' ||
                  enteredProductType === '소셜매치'
                    ? true
                    : false,
              }}
              {...props}
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
                disabled:
                  enteredProductType === '플랩대관' ||
                  enteredProductType === '소셜매치'
                    ? true
                    : false,
              }}
              options={timeOptions()}
            />
            ~
            <Select
              attribute={{
                value: enteredEndTime,
                onChange: changeEndTimeHandler,
                disabled:
                  enteredProductType === '플랩대관' ||
                  enteredProductType === '소셜매치'
                    ? true
                    : false,
              }}
              options={timeOptions()}
            />
          </div>
        </div>
        {isRepeatOpt && (
          <div className={classes['form-row']}>
            <div className={classes['form-control--label']}>
              <label htmlFor='is-repeat'>반복</label>
            </div>
            <div
              className={`${classes['form-control--input']} ${classes['justify-end']}`}
            >
              {`매주 ${enteredDateText}, 종료일: ${enteredRepeatEndDate}`}
            </div>
          </div>
        )}
        {enteredProductType !== '예약불가' && (
          <div className={classes['form-row']}>
            <div className={classes['form-control--label']}>
              <label htmlFor='product-price'>가격</label>
            </div>
            <div className={classes['form-control--input']}>
              <InputPrice
                attribute={{
                  id: 'product-price',
                  onChange: changePriceHandler,
                  value: enteredPrice,
                  disabled:
                    enteredProductType === '플랩대관' ||
                    enteredProductType === '소셜매치'
                      ? true
                      : false,
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
                    disabled:
                      enteredProductType === '플랩대관' ||
                      enteredProductType === '소셜매치'
                        ? true
                        : false,
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
                    disabled:
                      enteredProductType === '플랩대관' ||
                      enteredProductType === '소셜매치'
                        ? true
                        : false,
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
                  disabled:
                    enteredProductType === '플랩대관' ||
                    enteredProductType === '소셜매치'
                      ? true
                      : false,
                  placeholder: '기타',
                }}
              />
            </div>
          </div>
        )}
        {appointmentInfo.productType !== '소셜매치' &&
          appointmentInfo.productType !== '플랩대관' && (
            <div className={classes['form-actions']}>
              <button type='submit' className={classes['btn-delete']}>
                일정 취소
              </button>
              <button type='submit' className={classes['btn-modify']}>
                수정
              </button>
            </div>
          )}
        {appointmentInfo.productType === '플랩대관' &&
          authCtx.userRole === '마스터' && (
            <div className={classes['form-actions']}>
              <button type='submit' className={classes['btn-modify']}>
                대관 취소
              </button>
            </div>
          )}
        {appointmentInfo.productType === '플랩대관' &&
          authCtx.userRole === '구장주' && (
            <div className={classes['form-actions']}>
              <button type='submit' className={classes['btn-delete']} disabled>
                플랩대관은 수정하거나 삭제할 수 없습니다
              </button>
            </div>
          )}
        {appointmentInfo.productType === '소셜매치' && (
          <div className={classes['form-actions']}>
            <button type='submit' className={classes['btn-delete']} disabled>
              소셜매치는 수정하거나 삭제할 수 없습니다
            </button>
          </div>
        )}
      </form>
      {optionalFormIsShown && optionalFormType === '일정 취소' && (
        <OptionalForm
          {...props}
          modalTitle='반복 일정 취소'
          buttonText='일정 취소'
          onClose={props.onClose}
          onCloseOptionalForm={showOptionalForm}
          onResetOptionalFormType={resetOptionalFormTypeHandler}
        />
      )}
      {optionalFormIsShown && optionalFormType === '수정' && (
        <OptionalForm
          {...props}
          modalTitle='반복 일정 수정'
          buttonText='수정'
          onClose={props.onClose}
          onCloseOptionalForm={showOptionalForm}
          onResetOptionalFormType={resetOptionalFormTypeHandler}
          payload={{
            productType: enteredProductType,
            time: {
              startTime: `${adjDateFormat(enteredDate)}T${enteredStartTime}`,
              endTime: `${adjDateFormat(enteredDate)}T${enteredEndTime}`,
            },
            price: Number(enteredPrice.replaceAll(',', '')),
            consumer: enteredName,
            phoneNum: enteredPhoneNum,
            note: enteredNote,
          }}
        />
      )}
    </Modal>
  );
};

export default ModifyForm;
