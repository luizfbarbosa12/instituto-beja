import { ReactNode } from "react";

interface CardWithImageAndDescriptionProps {
  title: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export function CardWithImageAndDescription({
  title,
  children,
  imageSrc,
  imageAlt,
}: CardWithImageAndDescriptionProps) {
  return (
    <div className='border border-gray-300 rounded-3xl p-[70px] w-[630px] bg-transparent flex-shrink-0'>
      <div className='mb-6 h-12'>
        <img src={imageSrc} alt={imageAlt} className='h-full' />
      </div>

      <h3 className='font-bold text-md mb-2'>{title}</h3>
      <p className='text-md'>{children}</p>
    </div>
  );
}
