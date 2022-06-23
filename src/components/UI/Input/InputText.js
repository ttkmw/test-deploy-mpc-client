import classes from './InputText.module.css';

const InputText = (props) => {
  const { attribute, classList = [] } = props;
  const className = `${classes['form-control--text']} ${classList
    .map((item) => classes[item])
    .join(' ')}`;

  return (
    <div className={className}>
      <input {...attribute} className={classes['form-control--text__input']} />
    </div>
  );
};

export default InputText;
