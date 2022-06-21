import { useRef, useContext } from 'react';

import Modal from '../../UI/Modal/Modal';
import InputRadio from '../../UI/Input/InputRadio';
import classes from './OptionalForm.module.css';
import AuthContext from '../../../store/auth-context';

const OptionalForm = (props) => {
  const authCtx = useContext(AuthContext);
  const {
    date,
    schedulerDate,
    onChangeSchedulerDate,
    appointmentInfo,
    payload,
  } = props;

  const optOneRef = useRef();
  const optEverSinceRef = useRef();
  const optAllRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();

    let once = optOneRef.current.checked ? 'once' : false;
    let everSince = optEverSinceRef.current.checked ? 'ever-since' : false;
    let all = optAllRef.current.checked ? 'all' : false;
    let httpMethod = props.modalTitle === '반복 일정 취소' ? 'DELETE' : 'PUT';

    if (httpMethod === 'DELETE') {
      fetch(
        `http://localhost:8080/products/${appointmentInfo.id}/${
          once || everSince || all
        }`,
        {
          method: httpMethod,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authCtx.token}`,
          },
        }
      )
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

    if (httpMethod === 'PUT') {
      fetch(
        `http://localhost:8080/products/${appointmentInfo.id}/${
          once || everSince || all
        }`,
        {
          method: httpMethod,
          body: JSON.stringify({
            productType: payload.productType,
            time: {
              startTime: payload.time.startTime,
              endTime: payload.time.endTime,
            },
            consumer: payload.consumer,
            price: payload.price,
            phoneNum: payload.phoneNum,
            note: payload.note,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authCtx.token}`,
          },
        }
      )
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
  };

  return (
    <Modal title={props.modalTitle} onClose={props.onCloseOptionalForm}>
      <form className={classes['appointment-form']} onSubmit={submitHandler}>
        <div className={classes['form-row']}>
          <div className={classes['form-control--input']}>
            <InputRadio
              attribute={{
                id: 'once',
                name: 'repeat-option',
                defaultChecked: true,
                ref: optOneRef,
              }}
            >
              <label htmlFor='once'>이 일정만</label>
            </InputRadio>
          </div>
        </div>
        <div className={classes['form-row']}>
          <div className={classes['form-control--input']}>
            <InputRadio
              attribute={{
                id: 'ever-since',
                name: 'repeat-option',
                ref: optEverSinceRef,
              }}
            >
              <label htmlFor='ever-since'>이 일정 및 향후 일정</label>
            </InputRadio>
          </div>
        </div>
        <div className={classes['form-row']}>
          <div className={classes['form-control--input']}>
            <InputRadio
              attribute={{
                id: 'all',
                name: 'repeat-option',
                ref: optAllRef,
              }}
            >
              <label htmlFor='all'>모든 일정</label>
            </InputRadio>
          </div>
        </div>

        <div className={classes['form-actions']}>
          <button type='submit'>{props.buttonText}</button>
        </div>
      </form>
    </Modal>
  );
};

export default OptionalForm;
