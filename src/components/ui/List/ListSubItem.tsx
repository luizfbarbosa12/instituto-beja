interface ListItemProps {
  title?: string;
  children: React.ReactNode;
}

export function ListSubItem({ title, children }: ListItemProps) {
  return (
    <li className='ml-8 flex items-center gap-5'>
      <span className='size-5 border-retro-ochre border rounded-full shrink-0' />
      <p className='text-[28px] editorial leading-[120%]'>
        {title && <span className='text-retro-ochre uppercase'>{title}</span>}{" "}
        {children}
      </p>
    </li>
  );
}
