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

    if (evt.nativeEvent.submitter.innerText === '?????? ??????') {
      if (!isRepeatOpt) {
        fetch(`http://localhost:8080/products/${appointmentInfo.id}/once`, {
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
        setOptionalFormType('?????? ??????');
      }
    }

    if (evt.nativeEvent.submitter.innerText === '??????') {
      if (!isRepeatOpt) {
        fetch(`http://localhost:8080/products/${appointmentInfo.id}/once`, {
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
        setOptionalFormType('??????');
      }
    }
  };

  return (
    <Modal title={'?????? ??????'} onClose={props.onClose}>
      <form className={classes['appointment-form']} onSubmit={submitHandler}>
        <div className={classes['form-row']}>
          <div className={classes['form-control--label']}>
            <label htmlFor='product-type'>??????</label>
          </div>
          <div className={classes['form-control--input']}>
            <Select
              attribute={{
                id: 'product-type',
                autoFocus: 'autoFocus',
                value: enteredProductType,
                onChange: changeProductTypeHandler,
                disabled:
                  enteredProductType === '????????????' ||
                  enteredProductType === '????????????'
                    ? true
                    : false,
              }}
              options={
                enteredProductType === '????????????' ||
                enteredProductType === '????????????'
                  ? ['????????????', '????????????']
                  : ['????????????', '????????????', '????????????', '????????????', '????????????']
              }
            />
          </div>
        </div>
        <div className={classes['form-row']}>
          <div className={classes['form-control--label']}>
            <label htmlFor='schedule-date'>??????</label>
          </div>
          <div className={classes['form-control--input']}>
            <InputDate
              attribute={{
                id: 'schedule-date',
                onChange: changeDateHandler,
                value: enteredDate,
                disabled:
                  enteredProductType === '????????????' ||
                  enteredProductType === '????????????'
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
            <label>??????</label>
          </div>
          <div
            className={`${classes['form-control--input']} ${classes.inline}`}
          >
            <Select
              attribute={{
                value: enteredStartTime,
                onChange: changeStartTimeHandler,
                disabled:
                  enteredProductType === '????????????' ||
                  enteredProductType === '????????????'
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
                  enteredProductType === '????????????' ||
                  enteredProductType === '????????????'
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
              <label htmlFor='is-repeat'>??????</label>
            </div>
            <div
              className={`${classes['form-control--input']} ${classes['justify-end']}`}
            >
              {`?????? ${enteredDateText}, ?????????: ${enteredRepeatEndDate}`}
            </div>
          </div>
        )}
        {enteredProductType !== '????????????' && (
          <div className={classes['form-row']}>
            <div className={classes['form-control--label']}>
              <label htmlFor='product-price'>??????</label>
            </div>
            <div className={classes['form-control--input']}>
              <InputPrice
                attribute={{
                  id: 'product-price',
                  onChange: changePriceHandler,
                  value: enteredPrice,
                  disabled:
                    enteredProductType === '????????????' ||
                    enteredProductType === '????????????'
                      ? true
                      : false,
                  autoComplete: 'off',
                }}
              />
            </div>
          </div>
        )}
        {enteredProductType !== '????????????' &&
          enteredProductType !== '????????????' && (
            <div className={classes['form-row']}>
              <div className={classes['form-control--label']}>
                <label htmlFor='consumer-name'>?????????</label>
              </div>
              <div className={classes['form-control--input']}>
                <InputText
                  attribute={{
                    type: 'text',
                    id: 'consumer-name',
                    value: enteredName,
                    onChange: changeNameHandler,
                    placeholder: '??????',
                    disabled:
                      enteredProductType === '????????????' ||
                      enteredProductType === '????????????'
                        ? true
                        : false,
                    autoComplete: 'off',
                  }}
                />
              </div>
            </div>
          )}
        {enteredProductType !== '????????????' &&
          enteredProductType !== '????????????' && (
            <div className={classes['form-row']}>
              <div className={classes['form-control--label']}>
                <label htmlFor='phone-number'>?????????</label>
              </div>
              <div className={classes['form-control--input']}>
                <InputText
                  attribute={{
                    type: 'text',
                    id: 'phone-number',
                    value: enteredPhoneNum,
                    onChange: changePhoneNumHandler,
                    placeholder: '?????????',
                    disabled:
                      enteredProductType === '????????????' ||
                      enteredProductType === '????????????'
                        ? true
                        : false,
                    autoComplete: 'off',
                  }}
                />
              </div>
            </div>
          )}
        {enteredProductType !== '????????????' && (
          <div
            className={`${classes['form-row']} ${classes['form-row--textarea']}`}
          >
            <div className={classes['form-control--label']}>
              <label htmlFor='etc-note'>??????</label>
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
                    enteredProductType === '????????????' ||
                    enteredProductType === '????????????'
                      ? true
                      : false,
                  placeholder: '??????',
                }}
              />
            </div>
          </div>
        )}
        {appointmentInfo.productType !== '????????????' &&
          appointmentInfo.productType !== '????????????' && (
            <div className={classes['form-actions']}>
              <button type='submit' className={classes['btn-delete']}>
                ?????? ??????
              </button>
              <button type='submit' className={classes['btn-modify']}>
                ??????
              </button>
            </div>
          )}
        {appointmentInfo.productType === '????????????' &&
          authCtx.userRole === '?????????' && (
            <div className={classes['form-actions']}>
              <button type='submit' className={classes['btn-modify']}>
                ?????? ??????
              </button>
            </div>
          )}
        {appointmentInfo.productType === '????????????' &&
          authCtx.userRole === '?????????' && (
            <div className={classes['form-actions']}>
              <button type='submit' className={classes['btn-delete']} disabled>
                ??????????????? ??????????????? ????????? ??? ????????????
              </button>
            </div>
          )}
        {appointmentInfo.productType === '????????????' && (
          <div className={classes['form-actions']}>
            <button type='submit' className={classes['btn-delete']} disabled>
              ??????????????? ??????????????? ????????? ??? ????????????
            </button>
          </div>
        )}
      </form>
      {optionalFormIsShown && optionalFormType === '?????? ??????' && (
        <OptionalForm
          {...props}
          modalTitle='?????? ?????? ??????'
          buttonText='?????? ??????'
          onClose={props.onClose}
          onCloseOptionalForm={showOptionalForm}
          onResetOptionalFormType={resetOptionalFormTypeHandler}
        />
      )}
      {optionalFormIsShown && optionalFormType === '??????' && (
        <OptionalForm
          {...props}
          modalTitle='?????? ?????? ??????'
          buttonText='??????'
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
