import { NavLink } from 'react-router-dom';
import classes from './ZoneList.module.css';

const ZoneList = (props) => {
  const { zoneList } = props;

  const zoneItems = zoneList.map((zone) => (
    <li key={zone.id} className={classes['zone-list__item']}>
      <NavLink
        to={`/calendar/${zone.id}`}
        className={classes['zone-list__item--link']}
      >
        {zone.name}
      </NavLink>
    </li>
  ));

  return <ul className={classes['zone-list']}>{zoneItems}</ul>;
};

export default ZoneList;
