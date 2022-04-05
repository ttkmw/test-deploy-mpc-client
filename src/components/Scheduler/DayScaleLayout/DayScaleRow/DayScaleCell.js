import classes from './DayScaleCell.module.css';

const DayScaleCell = (props) => {
  const { day, className } = props;

  return (
    <td
      className={`${classes['dayscale-cell']} ${
        classes[className] ? classes[className] : ''
      }`}
    >
      <div>{day}</div>
    </td>
  );
};

export default DayScaleCell;
