import classes from './ToggleBtn.module.css';

const ToggleBtn = (props) => {
  return (
    <label
      htmlFor={props.attribute.id}
      className={classes['input--label-toggle']}
    >
      <input
        type='checkbox'
        onClick={props.onClick}
        className={classes['input--toggle']}
        {...props.attribute}
      />
    </label>
  );
};

export default ToggleBtn;
