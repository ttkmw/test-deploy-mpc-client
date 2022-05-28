const User = (props) => {
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
          d='M12.0001 12C14.2001 12 16.4001 10.4 16.4001 7.8C16.4001 5.2 14.2001 3 12.0001 3C9.8001 3 7.6001 5.1 7.6001 7.7C7.6001 10.3 9.8001 12 12.0001 12Z'
          stroke={color}
          strokeMiterlimit='10'
        />
        <path
          d='M12 14C17 14 21 15 21 19C21 21 12 21 12 21C12 21 3 21 3 19C3 15 7 14 12 14Z'
          stroke={color}
          strokeMiterlimit='10'
        />
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
        d='M16.0001 16C18.2001 16 20.4001 14.4 20.4001 11.8C20.4001 9.2 18.2001 7 16.0001 7C13.8001 7 11.6001 9.1 11.6001 11.7C11.6001 14.3 13.8001 16 16.0001 16Z'
        stroke={color}
        strokeWidth='1.5'
        strokeMiterlimit='10'
      />
      <path
        d='M16 18C21 18 25 19 25 23C25 25 16 25 16 25C16 25 7 25 7 23C7 19 11 18 16 18Z'
        stroke={color}
        strokeWidth='1.5'
        strokeMiterlimit='10'
      />
    </svg>
  );
};

export default User;
