import classes from './ToggleBtn.module.css';

const ToggleBtn = (props) => {
  const { attribute, classList = [] } = props;
  const className = `${classes['form-control--btn-toggle']} ${classList
    .map((item) => classes[item])
    .join(' ')}`;

  return (
    <label htmlFor={attribute.id} className={className}>
      <input
        type='checkbox'
        {...attribute}
        className={classes['form-control--btn-toggle__input']}
      />
    </label>
  );
};

export default ToggleBtn;
