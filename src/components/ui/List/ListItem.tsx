interface ListItemProps {
  title?: string;
  children: React.ReactNode;
}

export function ListItem({ title, children }: ListItemProps) {
  return (
    <li className='flex items-center gap-5'>
      <span className='size-5 bg-retro-ochre rounded-full shrink-0' />
      <p className='text-[28px] editorial leading-[120%]'>
        {title && <span className='text-retro-ochre uppercase'>{title}</span>}{" "}
        {children}
      </p>
    </li>
  );
}
