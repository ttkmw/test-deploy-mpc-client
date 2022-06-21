import React, { useReducer, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './Scheduler.module.css';

const getFirstDayOfWeek = (curDate) => {
  return new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    curDate.getDate() - curDate.getDay()
  );
};

const getDaysOfWeek = (firstDayOfWeek) => {
  const daysOfWeek = [];

  for (let i = 0; i < 7; i++) {
    daysOfWeek[i] = new Date(
      firstDayOfWeek.getFullYear(),
      firstDayOfWeek.getMonth(),
      firstDayOfWeek.getDate() + i
    );
  }

  return daysOfWeek;
};

const getDaysOfMonth = (firstDayOfWeek, curDate) => {
  const daysOfMonth = [];

  if (
    firstDayOfWeek.getMonth() !== curDate.getMonth() ||
    firstDayOfWeek.getDate() === 1
  ) {
    for (let i = 0; i < 42; i++) {
      daysOfMonth[i] = new Date(
        firstDayOfWeek.getFullYear(),
        firstDayOfWeek.getMonth(),
        firstDayOfWeek.getDate() + i
      );
    }
  }

  if (firstDayOfWeek.getMonth() === curDate.getMonth()) {
    const firstOfThisMonth = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    );

    for (let i = 0; i < 42; i++) {
      daysOfMonth[i] = new Date(
        firstOfThisMonth.getFullYear(),
        firstOfThisMonth.getMonth(),
        firstOfThisMonth.getDate() - firstOfThisMonth.getDay() + i
      );
    }
  }

  return daysOfMonth;
};

const adjDateFormat = (dateObj) => {
  let ISODateFormat;

  ISODateFormat = `${dateObj.getFullYear()}-${
    dateObj.getMonth() < 9
      ? `0${dateObj.getMonth() + 1}`
      : dateObj.getMonth() + 1
  }-${dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate()}`;

  return ISODateFormat;
};

const schedulerDateReducer = (state, action) => {
  switch (action.type) {
    case 'PREV_WEEK':
      return {
        viewState: state.viewState,
        date: getDaysOfWeek(
          new Date(
            state.date[0].getFullYear(),
            state.date[0].getMonth(),
            state.date[0].getDate() - 7
          )
        ),
      };
    case 'NEXT_WEEK':
      return {
        viewState: state.viewState,
        date: getDaysOfWeek(
          new Date(
            state.date[0].getFullYear(),
            state.date[0].getMonth(),
            state.date[0].getDate() + 7
          )
        ),
      };
    case 'CUR_WEEK':
      return {
        viewState: state.viewState,
        date: getDaysOfWeek(
          new Date(
            action.value.getFullYear(),
            action.value.getMonth(),
            action.value.getDate() - action.value.getDay()
          )
        ),
      };
    case 'PREV_MONTH':
      return {
        viewState: state.viewState,
        date: getDaysOfMonth(
          new Date(
            state.date[0].getFullYear(),
            state.date[0].getMonth(),
            state.date[0].getDate() - 7
          ),
          new Date(state.date[6].getFullYear(), state.date[6].getMonth(), 0)
        ),
      };
    case 'NEXT_MONTH':
      return {
        viewState: state.viewState,
        date: getDaysOfMonth(
          new Date(
            state.date[0].getFullYear(),
            state.date[0].getMonth(),
            state.date[0].getDate() + 42
          ),
          new Date(state.date[6].getFullYear(), state.date[6].getMonth() + 1, 1)
        ),
      };
    case 'CUR_MONTH':
      return {
        viewState: state.viewState,
        date: getDaysOfMonth(
          new Date(
            action.value.getFullYear(),
            action.value.getMonth(),
            action.value.getDate() - action.value.getDay()
          ),
          action.value
        ),
      };
    case 'SWITCH_VIEW':
      if (!state.viewState) {
        if (state.date[0].getMonth() === state.date[6].getMonth()) {
          return {
            viewState: !state.viewState,
            date: getDaysOfWeek(new Date(state.date[0])),
          };
        }
        return {
          viewState: !state.viewState,
          date: getDaysOfWeek(new Date(state.date[7])),
        };
      }

      if (state.viewState) {
        return {
          viewState: !state.viewState,
          date: getDaysOfMonth(new Date(state.date[0]), state.date[6]),
        };
      }
      return state;
    default:
      return state;
  }
};

const Scheduler = (props) => {
  const params = useParams();
  const authCtx = useContext(AuthContext);
  const { defaultCurrentDate = new Date() } = props;

  const [schedulerDate, dispatchSchedulerDate] = useReducer(
    schedulerDateReducer,
    {
      viewState: false,
      date: getDaysOfMonth(
        getFirstDayOfWeek(defaultCurrentDate),
        defaultCurrentDate
      ),
    }
  );
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const startDate = adjDateFormat(schedulerDate.date[0]);
    const endDate = adjDateFormat(
      schedulerDate.date[schedulerDate.date.length - 1]
    );

    if (+params.zoneId) {
      fetch(
        `http://localhost:8080/products?startDate=${startDate}&endDate=${endDate}&zoneId=${params.zoneId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authCtx.token}`,
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setAppointments(data.products);
        });
    }
  }, [authCtx.token, schedulerDate.date, params.zoneId]);

  const addPropsToReactElement = (element, props) => {
    if (React.isValidElement(element)) {
      return React.cloneElement(element, props);
    }
    return element;
  };

  const addPropsToChildren = (children, props) => {
    if (!Array.isArray(children)) {
      return addPropsToReactElement(children, props);
    }
    return children.map((childElement, idx) =>
      addPropsToReactElement(childElement, { key: idx, ...props })
    );
  };

  return (
    <div className={classes.scheduler}>
      {addPropsToChildren(props.children, {
        ...props,
        schedulerDate,
        data: appointments,
        onChangeSchedulerDate: dispatchSchedulerDate,
        adjDateFormat,
      })}
    </div>
  );
};

export default Scheduler;
