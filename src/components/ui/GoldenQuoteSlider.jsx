import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { calcClamp } from "../../data/Utils";
import { Swiper, SwiperSlide } from "swiper/react";

const GoldenQuoteSlider = ({ arr, cite }) => {
  const arrMap = arr.map((item, index) => (
    <SwiperSlide
      style={{
        fontSize: `clamp(${calcClamp(16, 32)})`,
        lineHeight: `clamp(${calcClamp(24 * 1.1, 48 * 1.3)})`,
      }}
      className='editorial text-retro-ochre leading-12 cursor-grab pb-10'
      key={index}
    >
      {item}
    </SwiperSlide>
  ));

  return (
    <div className='w-full flex flex-col py-10 max-640:py-5'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className='w-full pb-12'
      >
        {arrMap}
      </Swiper>

      <cite
        style={{
          fontSize: `clamp(${calcClamp(14, 28)})`,
          lineHeight: `clamp(${calcClamp(14 * 1.2, 28 * 1.2)})`,
        }}
        className='editorial text-retro-ochre w-full text-right'
      >
        — {cite}
      </cite>
    </div>
  );
};

export default GoldenQuoteSlider;
