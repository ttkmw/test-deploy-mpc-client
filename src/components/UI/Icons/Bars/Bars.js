const Bars = (props) => {
  const { size = 'large', color = '#222836' } = props;

  if (size !== 'large') {
    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line x1='2' y1='5' x2='22' y2='5' stroke={color} />
        <line x1='2' y1='12' x2='22' y2='12' stroke={color} />
        <line x1='2' y1='19' x2='22' y2='19' stroke={color} />
      </svg>
    );
  }

  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <line
        x1='4'
        y1='7.25'
        x2='28'
        y2='7.25'
        stroke={color}
        strokeWidth='1.5'
      />
      <line
        x1='4'
        y1='15.25'
        x2='28'
        y2='15.25'
        stroke={color}
        strokeWidth='1.5'
      />
      <line
        x1='4'
        y1='24.25'
        x2='28'
        y2='24.25'
        stroke={color}
        strokeWidth='1.5'
      />
    </svg>
  );
};

export default Bars;
