const Headset = (props) => {
  const { size = 'large' } = props;

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
          d='M18.9999 14.0699V16.8099C19.0003 17.2251 18.8715 17.6301 18.6314 17.9687C18.3913 18.3074 18.0518 18.5629 17.6599 18.6999L14.3799 19.8499'
          stroke='#596872'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M6 15V11.5C6 9.77609 6.68482 8.12279 7.9038 6.90381C9.12279 5.68482 10.7761 5 12.5 5V5C13.3536 5 14.1988 5.16813 14.9874 5.49478C15.7761 5.82144 16.4926 6.30023 17.0962 6.90381C17.6998 7.50739 18.1786 8.22394 18.5052 9.01256C18.8319 9.80117 19 10.6464 19 11.5V15'
          stroke='#596872'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M6.5 16.5C5.83696 16.5 5.20107 16.2366 4.73223 15.7678C4.26339 15.2989 4 14.663 4 14C4 13.337 4.26339 12.7011 4.73223 12.2322C5.20107 11.7634 5.83696 11.5 6.5 11.5V16.5Z'
          fill='#326ACC'
        />
        <path
          d='M18.5 16.5C19.163 16.5 19.7989 16.2366 20.2678 15.7678C20.7366 15.2989 21 14.663 21 14C21 13.337 20.7366 12.7011 20.2678 12.2322C19.7989 11.7634 19.163 11.5 18.5 11.5V16.5Z'
          fill='#326ACC'
        />
        <path
          d='M13.5 19.5H15.5'
          stroke='#FFC645'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15 11V12'
          stroke='#596872'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M10 11V12'
          stroke='#596872'
          strokeMiterlimit='10'
          strokeLinecap='round'
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
        d='M25.3333 18.76V22.4133C25.3339 22.9669 25.1622 23.5068 24.8421 23.9584C24.5219 24.4099 24.0692 24.7507 23.5467 24.9333L19.1733 26.4667'
        stroke='#596872'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <path
        d='M8 20.0001V15.3334C8 13.0349 8.91309 10.8305 10.5384 9.20516C12.1637 7.57984 14.3681 6.66675 16.6667 6.66675V6.66675C17.8048 6.66675 18.9318 6.89092 19.9833 7.32646C21.0347 7.762 21.9902 8.40038 22.7949 9.20516C23.5997 10.0099 24.2381 10.9653 24.6736 12.0168C25.1092 13.0683 25.3333 14.1953 25.3333 15.3334V20.0001'
        stroke='#596872'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <path
        d='M8.73324 21.9999C7.84918 21.9999 7.00133 21.6487 6.37621 21.0236C5.75109 20.3985 5.3999 19.5506 5.3999 18.6666C5.3999 17.7825 5.75109 16.9347 6.37621 16.3096C7.00133 15.6844 7.84918 15.3333 8.73324 15.3333V21.9999Z'
        fill='#326ACC'
      />
      <path
        d='M24.6001 21.9999C25.4842 21.9999 26.332 21.6487 26.9571 21.0236C27.5822 20.3985 27.9334 19.5506 27.9334 18.6666C27.9334 17.7825 27.5822 16.9347 26.9571 16.3096C26.332 15.6844 25.4842 15.3333 24.6001 15.3333V21.9999Z'
        fill='#326ACC'
      />
      <path
        d='M18 26H20.6667'
        stroke='#FFC645'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20 14.6667V16.0001'
        stroke='#596872'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
      <path
        d='M13.3333 14.6667V16.0001'
        stroke='#596872'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Headset;
