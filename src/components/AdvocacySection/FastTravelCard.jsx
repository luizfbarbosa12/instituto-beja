const FastTravelCard = ({ title, img, className, imgConfig }) => {
  return (
    <div
      className={`flex justify-center flex-col w-94 h-115 rounded-[60px] relative overflow-hidden 
        max-1080:h-100 
        max-1024:h-70 max-1024:w-full max-1024:pt-20 max-1024:pl-20 max-1024:rounded-4xl
        max-768:h-60 
        max-640:h-33
        max-768:rounded-3xl max-768:pt-10 max-768:pl-5
        max-380:justify-start
        ${className} 
        `}
    >
      <h1
        className='editorial text-center text-5xl -translate-y-25 
                    max-1280:text-3xl max-1280:px-2
                    max-1024:translate-y-0 max-1024:justify-start max-1024:items-start max-1024:w-full max-1024:h-full max-1024:text-start 
                    max-640:text-2xl
                    max-460:w-1/2
                    '
      >
        {title}
      </h1>

      <img
        src={img}
        alt={`Atalho para seção ${title}`}
        className={`${imgConfig}`}
      />
    </div>
  );
};

export default FastTravelCard;
