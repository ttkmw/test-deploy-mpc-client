import classes from './BodyContainer.module.css';

const BodyContainer = (props) => {
  return <div className={classes['body-container']}>{props.children}</div>;
};

export default BodyContainer;
