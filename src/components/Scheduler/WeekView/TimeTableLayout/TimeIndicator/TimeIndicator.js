import { useState, useEffect } from 'react';
import classes from './TimeIndicator.module.css';

const TimeIndicator = () => {
  const curDate = new Date();
  const [totalMillisec, setTotalMillisec] = useState(
    new Date() -
      new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        curDate.getDate(),
        0,
        0,
        0
      )
  );
  const movePerMillisec = `(54px + 1px) / 60 / 60 / 1000`;
  const indicatorPoint = `calc( ${movePerMillisec} * ${totalMillisec} )`;

  useEffect(() => {
    const identifier = setInterval(() => {
      setTotalMillisec((prevMillisec) => prevMillisec + 1000);
    }, 1000);

    return () => {
      clearInterval(identifier);
    };
  }, [totalMillisec]);

  return (
    <div
      className={classes['curtime-indicator']}
      style={{ top: indicatorPoint }}
    ></div>
  );
};

export default TimeIndicator;
