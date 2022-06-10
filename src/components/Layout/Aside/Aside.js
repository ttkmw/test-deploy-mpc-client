import { useState } from 'react';

import Bars from '../../UI/Icons/Bars/Bars';
import ChevronsLeft from '../../UI/Icons/Chevron/ChevronsLeft';
import classes from './Aside.module.css';

const Aside = (props) => {
  const [asideIsShown, setAsideIsShown] = useState(false);

  const asideToggleHandler = () => {
    setAsideIsShown((prevState) => !prevState);
  };

  return (
    <div
      className={`${classes['aside-container']} ${
        asideIsShown ? classes.active : ''
      }`}
      onClick={asideToggleHandler}
    >
      <button type='button' className={classes['hamburger-btn']}>
        {asideIsShown ? <ChevronsLeft /> : <Bars />}
      </button>
      <aside className={classes.aside} onClick={(evt) => evt.stopPropagation()}>
        {props.children}
      </aside>
    </div>
  );
};

export default Aside;
