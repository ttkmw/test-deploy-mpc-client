import { Fragment } from 'react';

import Branches from './Branches';
import classes from './GlobalNav.module.css';

const GlobalNav = () => {
  return (
    <Fragment>
      <div className={classes['search-bar']}>
        <input type='search' />
      </div>
      <nav className={classes.nav}>
        <strong className={classes['nav__title']}>구장 관리</strong>
        <Branches />
      </nav>
    </Fragment>
  );
};

export default GlobalNav;
