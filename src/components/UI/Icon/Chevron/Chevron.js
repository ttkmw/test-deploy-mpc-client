import '../icons.css';
import classes from './Chevron.module.css';

const Chevron = (props) => {
  const className = `icon ${
    props.className[0] +
    ` ${classes[props.className[1]]} ${classes['icon-chevron']}`
  }`;
  return <i className={className}></i>;
};

export default Chevron;
