import PropTypes from "prop-types";

export function Blockquote({ text, author }) {
  return (
    <blockquote className='flex flex-col w-full gap-1 font-serif text-3xl text-gold leading-relaxed'>
      <span>{text}</span>
      <cite className='self-end pt-6'>— {author}</cite>
    </blockquote>
  );
}

Blockquote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
