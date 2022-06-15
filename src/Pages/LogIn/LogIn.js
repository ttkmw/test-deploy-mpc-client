import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import LogInLogo from './LogInLogo';
import InputText from '../../components/UI/Input/InputText';
import AuthContext from '../../store/auth-context';
import classes from './LogIn.module.css';

const LogIn = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (evt) => {
    evt.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    fetch('https://dev.plab.so/auth/signIn', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          return res.json();
        }

        return res.json().then((data) => {
          throw new Error(data.message);
        });
      })
      .then((data) => {
        authCtx.login(data.accessToken, data.expiresDateTime);
        history.replace('/calendar/0');
      })
      .catch((err) => {
        alert(err.message);
      });
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
      {isLoading && <p>로그인 중...</p>}
    </section>
  );
};

export default LogIn;
