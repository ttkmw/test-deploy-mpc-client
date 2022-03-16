import HeaderUtilityButton from './HeaderUtilityButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['header__inner']}>
        <h1 className={classes['header__logo']}>
          <a href='/'>
            <img
              src='https://plab-football.s3.amazonaws.com/static/img/logo.svg'
              alt='플랩풋볼'
            />
          </a>
        </h1>
        <HeaderUtilityButton className={classes['header__btn-utility']}>
          사용자
        </HeaderUtilityButton>
      </div>
    </header>
  );
};

export default Header;
