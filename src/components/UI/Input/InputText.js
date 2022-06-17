import classes from './InputText.module.css';

const InputText = (props) => {
  const { attribute } = props;

  return (
    <div className={classes['form-control--text']}>
      <input className={classes['form-control--text__input']} {...attribute} />
    </div>
  );
};

export default InputText;
