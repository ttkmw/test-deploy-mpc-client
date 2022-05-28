const CalendarWeek = (props) => {
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
        <path
          d='M17.5 21.5H6.5C4.3 21.5 2.5 19.7 2.5 17.5V8.5C2.5 6.3 4.3 4.5 6.5 4.5H17.5C19.7 4.5 21.5 6.3 21.5 8.5V17.5C21.5 19.7 19.7 21.5 17.5 21.5Z'
          stroke={color}
          strokeMiterlimit='10'
        />
        <path d='M2.5 8.5H21.5' stroke={color} strokeMiterlimit='10' />
        <path d='M6.5 11H5.5V19H6.5V11Z' fill={color} />
        <path d='M10.5 11H9.5V19H10.5V11Z' fill={color} />
        <path d='M14.5 11H13.5V19H14.5V11Z' fill={color} />
        <path d='M18.5 11H17.5V19H18.5V11Z' fill={color} />
        <path d='M7.5 3V6' stroke={color} strokeMiterlimit='10' />
        <path d='M16.5 3V6' stroke={color} strokeMiterlimit='10' />
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
        d='M22.9474 28.5H9.05263C6.27368 28.5 4 26.1706 4 23.3235V11.6765C4 8.82941 6.27368 6.5 9.05263 6.5H22.9474C25.7263 6.5 28 8.82941 28 11.6765V23.3235C28 26.1706 25.7263 28.5 22.9474 28.5Z'
        stroke={color}
        strokeWidth='1.5'
        strokeMiterlimit='10'
      />
      <path
        d='M4 11H28'
        stroke={color}
        strokeWidth='1.5'
        strokeMiterlimit='10'
      />
      <path d='M9.28955 14.5H7.78955V25H9.28955V14.5Z' fill={color} />
      <path d='M14.342 14.5H12.842V25H14.342V14.5Z' fill={color} />
      <path d='M19.3948 14.5H17.8948V25H19.3948V14.5Z' fill={color} />
      <path d='M24.4473 14.5H22.9473V25H24.4473V14.5Z' fill={color} />
      <path
        d='M10 4.5V8.5'
        stroke={color}
        strokeWidth='1.5'
        strokeMiterlimit='10'
      />
      <path
        d='M21 4.5V8.5'
        stroke={color}
        strokeWidth='1.5'
        strokeMiterlimit='10'
      />
    </svg>
  );
};

export default CalendarWeek;
