import PropTypes from "prop-types";

export function ListItem({ title, children }) {
  return (
    <li className='flex items-center gap-5'>
      <span className='size-5 bg-retro-ochre rounded-full shrink-0' />
      <p className='text-[28px] editorial leading-[120%]'>
        <span className='text-retro-ochre uppercase'>{title}</span> {children}
      </p>
    </li>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
