import classes from './Stadiums.module.css';

const Stadiums = (props) => {
  const stadiumsList = props.stadiumsList.map((stadium) =>
    stadium.name !== null ? (
      <li key={stadium.id}>
        <a href='#;'>{stadium.name}</a>
      </li>
    ) : null
  );
  return <ul className={classes['stadiums-list']}>{stadiumsList}</ul>;
};

export default Stadiums;
