import classes from './Textarea.module.css';

const Textarea = (props) => {
  return (
    <div className={classes['form-control--textarea']}>
      <textarea
        {...props.attribute}
        className={classes['form-control--textarea__text']}
      ></textarea>
    </div>
  );
};

export default Textarea;
