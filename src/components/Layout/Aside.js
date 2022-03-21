import { Fragment, useState } from 'react';

import classes from './Aside.module.css';

const HamburgerButton = (props) => {
  return (
    <button
      type='button'
      onClick={props.onToggle}
      className={`${classes['hamburger-btn']} ${props.className}`}
    ></button>
  );
};

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onToggle} />;
};

const Aside = (props) => {
  const [asideIsShown, setAsideIsShown] = useState(false);

  const asideToggleHandler = () => {
    setAsideIsShown((prevState) => !prevState);
  };

  return (
    <Fragment>
      <HamburgerButton
        className={asideIsShown ? classes.active : ''}
        onToggle={asideToggleHandler}
      />
      <aside
        className={`${classes.aside} ${asideIsShown ? classes.active : ''}`}
      >
        {props.children}
      </aside>
      {asideIsShown && <Backdrop onToggle={asideToggleHandler} />}
    </Fragment>
  );
};

export default Aside;
