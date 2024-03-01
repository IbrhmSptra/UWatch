import BottomNavbar from "../Layouts/BottomNavbar";
import background from "../assets/img/noise.png";
import Logo from "../Components/Logo";
import Carousel from "../Layouts/Carousel";
import Navbar from "../Layouts/Navbar";
import Slider from "../Layouts/Slider";
import CardSeeMore from "../Components/CardSeeMore";
import { useEffect, useState } from "react";
import { getTopRated, getTrendingWeek } from "../Services/TMDB/movie.service";
import Genre from "../Layouts/Genre";

const HomePage = () => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [trendingMovie, setTrendingMovie] = useState([]);
  useEffect(() => {
    getTopRated((data) => {
      setTopRatedMovie(data.results);
    });
    getTrendingWeek((data) => {
      setTrendingMovie(data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <main
        className="font-lgSpartan bg-black pb-36 pt-10 md:pb-10 px-4 sm:px-8 md:px-12 xl:px-40"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Logo addClass="text-center text-3xl md:hidden" />
        <div className="mt-10">
          {/* New Movie Carousel */}
          <Carousel />

          {/* Top Rated Movie Slider */}
          <Slider
            title="TOP RATED MOVIE"
            data={topRatedMovie}
            btnNext="nextTopRated"
            btnPrev="prevTopRated"
          >
            {topRatedMovie && <CardSeeMore />}
          </Slider>

          {/* Trending Movie Slider */}
          <Slider
            title="TRENDING THIS WEEK"
            data={trendingMovie}
            btnNext="nextTrending"
            btnPrev="prevTrending"
          />
          <Genre addClass="hidden md:block mt-16" />
        </div>
      </main>
      <BottomNavbar />
    </>
  );
};

export default HomePage;
