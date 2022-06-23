import classes from './Textarea.module.css';

const Textarea = (props) => {
  const { attribute, classList = [] } = props;
  const className = `${classes['form-control--textarea']} ${classList
    .map((item) => classes[item])
    .join(' ')}`;

  return (
    <div className={className}>
      <textarea
        {...attribute}
        className={classes['form-control--textarea__input']}
      ></textarea>
    </div>
  );
};

export default Textarea;
