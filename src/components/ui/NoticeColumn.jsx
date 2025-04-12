import PropTypes from "prop-types";

export function NoticeColumn({ children }) {
  return <div className='flex flex-col w-full gap-8'>{children}</div>;
}

NoticeColumn.propTypes = {
  children: PropTypes.node.isRequired,
};
