import { Fragment, useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Layout/Header/Header';
import BodyContainer from '../../components/Layout/BodyContainer';
import Scheduler from '../../components/Scheduler/Scheduler';
import WeekView from '../../components/Scheduler/WeekView/WeekView';
import MonthView from '../../components/Scheduler/MonthView/MonthView';
import DateNavigator from '../../components/Scheduler/DateNavigator/DateNavigator';
import Aside from '../../components/Layout/Aside/Aside';
import GlobalNav from '../../components/GlobalNav/GlobalNav';
import AuthContext from '../../store/auth-context';

const Calendar = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [stadiumsList, setStadiumsList] = useState([]);
  const [zoneList, setZoneList] = useState([]);

  const changeZoneListHandler = (zoneItems) => {
    setZoneList(zoneItems);
  };

  useEffect(() => {
    fetch('https://dev.plab.so/stadiums', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStadiumsList(data.stadiums);
        setZoneList(data.stadiums[0].zones);
        history.replace(`/calendar/${data.stadiums[0].zones[0].id}`);
      });
  }, [authCtx.token, history]);

  return (
    <Fragment>
      <Header />
      <BodyContainer>
        <main>
          <Scheduler>
            <DateNavigator />
            <WeekView startDayHour={0} endDayHour={24} />
            <MonthView />
          </Scheduler>
        </main>
        <Aside>
          <GlobalNav
            stadiumsList={stadiumsList}
            zoneList={zoneList}
            onChangeZoneList={changeZoneListHandler}
          />
        </Aside>
      </BodyContainer>
    </Fragment>
  );
};

export default Calendar;
