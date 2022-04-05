import { Fragment } from 'react';

import Header from './components/Layout/Header';
import BodyContainer from './components/Layout/BodyContainer';
import Aside from './components/Layout/Aside';
import GlobalNav from './components/GlobalNav/GlobalNav';
import Scheduler from './components/Scheduler/Scheduler';
import WeekView from './components/Scheduler/WeekView/WeekView';

const App = () => {
  return (
    <Fragment>
      <Header />
      <BodyContainer>
        <main>
          <Scheduler
            data={[
              { id: 'sche1', title: 'title01' },
              { id: 'sche2', title: 'title02' },
            ]}
          >
            <WeekView
              startDayHour={12}
              endDayHour={21}
              // excludedDays={[0, 6]}
            />
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
