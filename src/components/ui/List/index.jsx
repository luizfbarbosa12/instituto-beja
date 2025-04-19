import PropTypes from "prop-types";
import { ListItem } from "./ListItem";

export function List({ title, children }) {
  return (
    <section className='flex flex-col gap-8'>
      <div className='h-0.5 w-2/3 bg-retro-ochre' />
      {title && (
        <h3 className='text-[32px] leading-[100%] w-full editorial'>{title}</h3>
      )}

      <ul className='flex flex-col gap-11 '>
        {children} {/* Children should be ListItem components */}
      </ul>
    </section>
  );
}

List.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.instanceOf(ListItem)).isRequired,
};
List.defaultProps = {
  title: null,
};
