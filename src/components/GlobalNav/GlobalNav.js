import { Fragment } from 'react';

import Chevron from '../UI/Icon/Chevron/Chevron';
import classes from './GlobalNav.module.css';

const DUMMY_BRANCHES = [
  {
    id: Math.random(),
    name: 'HM풋살파크 안산 고잔점',
    stadiums: [
      {
        id: Math.random(),
        name: 'B구장',
      },
    ],
  },
  {
    id: Math.random(),
    name: 'HM풋살파크 인천 청라점',
    stadiums: [
      {
        id: Math.random(),
        name: null,
      },
    ],
  },
  {
    id: Math.random(),
    name: 'PSG아카데미 코리아 토브청라센터 2호점',
    stadiums: [
      {
        id: Math.random(),
        name: 'A구장',
      },
      {
        id: Math.random(),
        name: 'B구장',
      },
    ],
  },
  {
    id: Math.random(),
    name: '송파 천마 풋살파크',
    stadiums: [
      {
        id: Math.random(),
        name: 'A구장',
      },
      {
        id: Math.random(),
        name: 'B구장',
      },
      {
        id: Math.random(),
        name: 'C구장',
      },
      {
        id: Math.random(),
        name: 'D구장',
      },
    ],
  },
];

const GlobalNav = () => {
  const branchesList = DUMMY_BRANCHES.map((branch) => (
    <li key={branch.id}>
      <details>
        <summary className={classes.summary}>
          {branch.name}
          <Chevron className={['icon--right', 'icon-chevron--down']} />
        </summary>
        <ul className={classes['stadiums-list']}>
          {branch.stadiums.map((stadium) =>
            stadium.name !== null ? (
              <li key={stadium.id}>
                <a href='#;'>{stadium.name}</a>
              </li>
            ) : null
          )}
        </ul>
      </details>
    </li>
  ));

  return (
    <Fragment>
      <div className={classes['search-bar']}>
        <input type='search' />
      </div>
      <nav className={classes.nav}>
        <strong className={classes['nav__title']}>구장 관리</strong>
        <ul className={classes['branches-list']}>{branchesList}</ul>
      </nav>
    </Fragment>
  );
};

export default GlobalNav;
