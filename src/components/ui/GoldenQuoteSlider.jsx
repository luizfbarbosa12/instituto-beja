import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import * as Icon from "@phosphor-icons/react";
import { calcClamp } from "../../data/Utils";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";

const GoldenQuoteSlider = ({ arr, cite }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
      <style>{`
        @media (max-width: 768px) {
          .golden-quote-prev, .golden-quote-next {
            width: 72px !important;
            height: 72px !important;
          }
        }
      `}</style>
      <div className="relative w-full pb-12">

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.params && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          modules={[Navigation]}
          navigation={false}
          className="w-full px-16 max-768:px-4"
        >
          {arrMap}
        </Swiper>
        <div className="flex w-full justify-center items-center gap-8 mt-6">
          <button
            ref={prevRef}
            className="golden-quote-prev flex-center p-3 rounded-full bg-white/85 hover:bg-retro-ochre transition pointer-events-auto shadow"
            style={{
              width: `clamp(${calcClamp(28, 64)})`,
              height: `clamp(${calcClamp(28, 64)})`,
              color: '#b39567',
            }}
            aria-label="Previous"
          >
            <Icon.ArrowLeft className="size-full" />
          </button>
          <button
            ref={nextRef}
            className="golden-quote-next flex-center p-3 rounded-full bg-white/85 hover:bg-retro-ochre transition pointer-events-auto shadow"
            style={{
              width: `clamp(${calcClamp(28, 64)})`,
              height: `clamp(${calcClamp(28, 64)})`,
              color: '#b39567',
            }}
            aria-label="Next"
          >
            <Icon.ArrowRight className="size-full" />
          </button>
        </div>

      </div>

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
