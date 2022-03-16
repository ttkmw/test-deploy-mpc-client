const HeaderUtilityButton = (props) => {
  return (
    <button type='button' className={props.className}>
      {props.children}
    </button>
  );
};

export default HeaderUtilityButton;
