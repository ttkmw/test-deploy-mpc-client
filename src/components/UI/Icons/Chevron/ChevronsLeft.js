const ChevronsLeft = (props) => {
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
        <path d='M18 6L11 12L18 18M13 6L6 12L13 18' stroke={color} />
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
      <path
        d='M27 5L14.1667 16L27 27M17.8333 5L5 16L17.8333 27'
        stroke={color}
        strokeWidth='1.5'
      />
    </svg>
  );
};

export default ChevronsLeft;
