import { Fragment } from 'react';

import Header from './components/Layout/Header';
import BodyContainer from './components/Layout/BodyContainer';
import Scheduler from './components/Scheduler/Scheduler';
import WeekView from './components/Scheduler/WeekView/WeekView';
import DateNavigator from './components/Scheduler/DateNavigator/DateNavigator';

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
            <DateNavigator />
            <WeekView
              startDayHour={0}
              endDayHour={24}
              // excludedDays={[0, 6]}
            />
          </Scheduler>
        </main>
      </BodyContainer>
    </Fragment>
  );
};

export default App;
