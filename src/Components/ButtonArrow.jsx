/* eslint-disable react/prop-types */
import { useSwiper } from "swiper/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const ButtonArrow = ({ direction, addClass }) => {
  const swiper = useSwiper();
  return (
    <div
      className={`z-20 absolute w-8 h-8 rounded-full items-center justify-center bg-grayText bg-opacity-40 top-1/2 -translate-y-1/2 shadow-xl cursor-pointer hidden md:flex active:scale-110 transition-all ${addClass} ${
        direction == "left" ? "-left-5" : "-right-5"
      }`}
      onClick={() => {
        direction == "left" ? swiper.slidePrev() : swiper.slideNext();
        console.log(direction);
      }}
    >
      {direction == "left" ? (
        <FaChevronLeft className="text-tertiary" />
      ) : (
        <FaChevronRight className="text-tertiary" />
      )}
    </div>
  );
};

export default ButtonArrow;
