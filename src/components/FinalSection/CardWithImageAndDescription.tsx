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
    <div className='border border-gray-300 rounded-3xl p-[70px] w-[630px] bg-transparent flex-shrink-0 max-768:w-[550px] max-768:p-10 max-640:w-[450px] max-640:p-8 max-460:w-[350px]'>
      <div className='mb-6 h-12'>
        <img src={imageSrc} alt={imageAlt} className='h-full' />
      </div>

      <h3 className='font-bold text-md mb-2'>{title}</h3>
      <div className='text-md'>{children}</div>
    </div>
  );
}
