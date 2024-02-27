import ItemCarousel from "../Components/ItemCarousel";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { getNowPlaying } from "../Services/TMDB/movie.service";

const Carousel = () => {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    getNowPlaying((data) => {
      setNewMovies(data);
    });
  }, []);

  return (
    <>
      {newMovies && (
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 4,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {newMovies.map((value, i) => (
            <SwiperSlide key={i}>
              <ItemCarousel data={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Carousel;
