import PropTypes from "prop-types";

const LineCME = ({ style }) => {
  return (
    <svg
      width='915'
      height='250'
      viewBox='0 0 915 250'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${style}`}
    >
      <path d='M914 0V93.4271H1V249H146.185' stroke='#1E0301' />
    </svg>
  );
};

LineCME.propTypes = {
  style: PropTypes.string.isRequired,
};

export default LineCME;
