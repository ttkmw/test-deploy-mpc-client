const Xmark = (props) => {
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
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.7071 12.0001L19.0008 5.70637L18.2937 4.99927L12 11.293L5.70714 5.00008L5.00003 5.70719L11.2929 12.0001L4.99927 18.2937L5.70637 19.0008L12 12.7072L18.2945 19.0016L19.0016 18.2945L12.7071 12.0001Z'
          fill={color}
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.0606 16L25.3933 7.66735L24.3326 6.60669L15.9999 14.9394L7.66837 6.60777L6.60771 7.66843L14.9393 16L6.60669 24.3326L7.66735 25.3933L15.9999 17.0607L24.3336 25.3944L25.3943 24.3337L17.0606 16Z'
        fill={color}
      />
    </svg>
  );
};

export default Xmark;
