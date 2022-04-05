import DayScaleRow from './DayScaleRow/DayScaleRow';

const DayScaleLayout = (props) => {
  return (
    <table>
      <tbody>
        <DayScaleRow {...props} />
      </tbody>
    </table>
  );
};

export default DayScaleLayout;
