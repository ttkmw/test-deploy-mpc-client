import HeaderUtilityBtn from './HeaderUtilityBtn';
import HeaderLogo from './HeaderLogo';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['header__inner']}>
        <h1 className={classes['header__logo']}>
          <a href='/'>
            <HeaderLogo />
          </a>
        </h1>
        <HeaderUtilityBtn />
      </div>
    </header>
  );
};

export default Header;
