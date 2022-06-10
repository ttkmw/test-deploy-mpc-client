import StadiumSelect from './StadiumSelect/StadiumSelect';
import ZoneList from './ZoneList';
import classes from './GlobalNav.module.css';

const GlobalNav = () => {
  return (
    <nav className={classes.nav}>
      <header className={classes['nav__header']}>
        <div className={classes['nav__header-inner']}>
          <StadiumSelect />
        </div>
      </header>
      <div className={classes['nav__body']}>
        <ZoneList />
      </div>
      <div className={classes['nav__footer']}>
        <div className={classes['dayofweek-switcher']}>
          <strong>한주의 시작을 월요일로</strong>
        </div>
        <div className={classes['user-info']}>
          <strong>계정 설정</strong>
        </div>
      </div>
    </nav>
  );
};

export default GlobalNav;
