import { useRef } from 'react';

import LogInLogo from './LogInLogo';
import InputText from '../../components/UI/Input/InputText';
import classes from './LogIn.module.css';

const LogIn = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredEmail, enteredPassword);
  };

  return (
    <section className={classes['login-form-container']}>
      <h1 className={classes['login-form-container__logo']}>
        <LogInLogo />
      </h1>
      <form onSubmit={submitHandler} className={classes['login-form']}>
        <InputText
          attribute={{
            type: 'text',
            placeholder: '아이디',
            ref: emailInputRef,
          }}
        />
        <InputText
          attribute={{
            type: 'password',
            placeholder: '패스워드',
            ref: passwordInputRef,
          }}
        />
        <button type='submit' className={classes['login-form__btn--submit']}>
          로그인
        </button>
      </form>
    </section>
  );
};

export default LogIn;
