// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import ButtonArrow from "../Components/ButtonArrow";
import Card from "../Components/CardMovie";

const Slider = ({ title, data, children, btnNext, btnPrev }) => {
  console.log(data);
  return (
    <div className="mt-16">
      <h1 className="font-semibold text-3xl xl:text-3xl text-white">{title}</h1>
      <div className="mt-4 relative">
        {data.length > 0 && <ButtonArrow addClass={btnPrev} direction="left" />}
        <Swiper
          navigation={{ nextEl: `.${btnNext}`, prevEl: `.${btnPrev}` }}
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={20}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.slice(0, 10).map((value, i) => (
            <SwiperSlide key={i}>
              <Card data={value} />
            </SwiperSlide>
          ))}
          {children && <SwiperSlide>{children}</SwiperSlide>}
        </Swiper>
        {data.length > 0 && (
          <ButtonArrow addClass={btnNext} direction="right" />
        )}
      </div>
    </div>
  );
};

export default Slider;
