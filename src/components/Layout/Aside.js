import classes from './Aside.module.css';

const Aside = (props) => {
  return <aside className={classes.aside}>{props.children}</aside>;
};

export default Aside;
