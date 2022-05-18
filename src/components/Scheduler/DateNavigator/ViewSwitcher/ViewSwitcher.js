import classes from './ViewSwitcher.module.css';

const ViewSwitcher = (props) => {
  const { viewState, onChangeView } = props;

  return (
    <div className={classes['view-switch']}>
      <input
        type='checkbox'
        defaultChecked={viewState}
        onChange={() => onChangeView()}
        className={classes['view-switch__checkbox']}
      />
      <label className={classes['view-switch__label']}>
        <span className={classes['month-view']}>월간</span>
        <span className={classes['week-view']}>주간</span>
      </label>
    </div>
  );
};

export default ViewSwitcher;
