interface BlockquoteProps {
  text: string;
  author: string;
}

export function Blockquote({ text, author }: BlockquoteProps) {
  return (
    <blockquote className='flex flex-col w-full gap-1 font-serif text-3xl text-gold leading-relaxed'>
      <span>{text}</span>
      <cite className='self-end pt-6 max-w-[650px]'>— {author}</cite>
    </blockquote>
  );
}
