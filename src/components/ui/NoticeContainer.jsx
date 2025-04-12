import PropTypes from "prop-types";

export function NoticeContainer({ children }) {
  return <div className='flex gap-16 text-base'>{children}</div>;
}

NoticeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
