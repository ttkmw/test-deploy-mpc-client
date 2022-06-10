import classes from './ZoneList.module.css';

const DUMMY_ZONE = [
  {
    id: Math.random(),
    name: 'HM풋살파크 일산점 1구역',
  },
  {
    id: Math.random(),
    name: 'HM풋살파크 일산점 2구역',
  },
  {
    id: Math.random(),
    name: 'HM풋살파크 일산점 3구역',
  },
];

const ZoneList = () => {
  const zoneList = DUMMY_ZONE.map((zone) => (
    <li key={zone.id} className={classes['zone-list__item']}>
      <a href='#;' className={classes['zone-list__item--link']}>
        {zone.name}
      </a>
    </li>
  ));

  return <ul className={classes['zone-list']}>{zoneList}</ul>;
};

export default ZoneList;
