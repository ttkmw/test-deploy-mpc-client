import Stadiums from './Stadiums';
import Chevron from '../UI/Icon/Chevron/Chevron';

import classes from './Branches.module.css';

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

const Branches = () => {
  const branchesList = DUMMY_BRANCHES.map((branch) => (
    <li key={branch.id}>
      <details>
        <summary className={classes.summary}>
          {branch.name}
          <Chevron className={['icon--right', 'icon-chevron--down']} />
        </summary>
        <Stadiums stadiumsList={branch.stadiums} />
      </details>
    </li>
  ));

  return <ul className={classes['branches-list']}>{branchesList}</ul>;
};

export default Branches;
