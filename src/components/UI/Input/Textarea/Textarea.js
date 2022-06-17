import classes from './Textarea.module.css';

const Textarea = (props) => {
  const { attribute } = props;
  return (
    <div className={classes['form-control--textarea']}>
      <textarea
        className={classes['form-control--textarea__text']}
        {...attribute}
      ></textarea>
    </div>
  );
};

export default Textarea;
