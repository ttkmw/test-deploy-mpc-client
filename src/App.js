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
        {authCtx.isLoggedIn && <Redirect to='/calendar/1' />}
      </Route>
      {!authCtx.isLoggedIn && (
        <Route path='/login'>
          <LogIn />
        </Route>
      )}
      {authCtx.isLoggedIn && (
        <Route path='/calendar/:zoneId'>
          <Calendar />
        </Route>
      )}
      <Route path='*'>
        {!authCtx.isLoggedIn && <Redirect to='/login' />}
        {authCtx.isLoggedIn && <Redirect to='/calendar/1' />}
      </Route>
    </Switch>
  );
};

export default App;
