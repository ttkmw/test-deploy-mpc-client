import { Route, Switch, Redirect } from 'react-router-dom';

import LogIn from './Pages/LogIn/LogIn';
import Calendar from './Pages/Calendar/Calendar';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/login' />
      </Route>
      <Route path='/login'>
        <LogIn />
      </Route>
      <Route path='/calendar/:zoneId'>
        <Calendar />
      </Route>
    </Switch>
  );
};

export default App;
