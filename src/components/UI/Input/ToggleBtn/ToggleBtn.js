import classes from './ToggleBtn.module.css';

const ToggleBtn = (props) => {
  const { attribute } = props;

  return (
    <label htmlFor={attribute.id} className={classes['input--label-toggle']}>
      <input
        type='checkbox'
        className={classes['input--toggle']}
        {...attribute}
      />
    </label>
  );
};

export default ToggleBtn;
