import classes from './InputText.module.css';

const InputText = (props) => {
  return (
    <div className={classes['form-control--text']}>
      <input
        {...props.attribute}
        className={classes['form-control--text__input']}
      />
    </div>
  );
};

export default InputText;
