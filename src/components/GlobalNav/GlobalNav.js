import { useContext } from 'react';

import StadiumSelect from './StadiumSelect/StadiumSelect';
import ZoneList from './ZoneList';
import AuthContext from '../../store/auth-context';
import classes from './GlobalNav.module.css';

const GlobalNav = (props) => {
  const { stadiumsList, zoneList, onChangeZoneList } = props;
  const authCtx = useContext(AuthContext);

  const saveZoneListHandler = (stadiumId) => {
    onChangeZoneList(
      stadiumsList.find((stadium) => stadium.id === +stadiumId).zones
    );
  };

  return (
    <nav className={classes.nav}>
      <header className={classes['nav__header']}>
        <div className={classes['nav__header-inner']}>
          <StadiumSelect {...props} onSaveZoneList={saveZoneListHandler} />
        </div>
      </header>
      <div className={classes['nav__body']}>
        <ZoneList zoneList={zoneList} />
      </div>
      <div className={classes['nav__footer']}>
        <div className={classes['dayofweek-switcher']}>
          <strong>한주의 시작을 월요일로</strong>
        </div>
        <div className={classes['user-info']}>
          <strong>계정 설정</strong>
          <br />
          <button type='button' onClick={authCtx.logout}>
            로그아웃
          </button>
        </div>
      </div>
    </nav>
  );
};

export default GlobalNav;
