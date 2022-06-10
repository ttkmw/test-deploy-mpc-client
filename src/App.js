import { Fragment } from 'react';

import Header from './components/Layout/Header/Header';
import BodyContainer from './components/Layout/BodyContainer';
import Scheduler from './components/Scheduler/Scheduler';
import WeekView from './components/Scheduler/WeekView/WeekView';
import MonthView from './components/Scheduler/MonthView/MonthView';
import DateNavigator from './components/Scheduler/DateNavigator/DateNavigator';
import Aside from './components/Layout/Aside/Aside';
import GlobalNav from './components/GlobalNav/GlobalNav';

import { appointments } from './dummy-data/appointments';

const App = () => {
  return (
    <Fragment>
      <Header />
      <BodyContainer>
        <main>
          <Scheduler data={appointments}>
            <DateNavigator />
            <WeekView
              startDayHour={0}
              endDayHour={24}
              // excludedDays={[0, 6]}
            />
            <MonthView />
          </Scheduler>
        </main>
        <Aside>
          <GlobalNav />
        </Aside>
      </BodyContainer>
    </Fragment>
  );
};

export default App;
