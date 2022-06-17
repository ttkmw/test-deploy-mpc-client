import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LogIn from './Pages/LogIn/LogIn';
import Calendar from './Pages/Calendar/Calendar';
import AuthContext from './store/auth-context';

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route path='/' exact>
        {!authCtx.isLoggedIn && <Redirect to='/login' />}
        {authCtx.isLoggedIn && <Redirect to='/calendar' />}
      </Route>
      {!authCtx.isLoggedIn && (
        <Route path='/login' exact>
          <LogIn />
        </Route>
      )}
      {authCtx.isLoggedIn && (
        <Route path='/calendar' exact>
          <Calendar />
        </Route>
      )}
      {authCtx.isLoggedIn && (
        <Route path='/calendar/:zoneId'>
          <Calendar />
        </Route>
      )}
      <Route path='*'>
        {!authCtx.isLoggedIn && <Redirect to='/login' />}
        {authCtx.isLoggedIn && (
          <p>
            죄송합니다. URL이 잘못 입력되었거나, 변경 혹은 삭제되어 요청하신
            페이지를 찾을 수 없습니다.
          </p>
        )}
      </Route>
    </Switch>
  );
};

export default App;
