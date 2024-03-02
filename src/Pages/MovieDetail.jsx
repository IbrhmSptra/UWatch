import { useParams } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import Logo from "../Components/Logo";
import BottomNavbar from "../Layouts/BottomNavbar";
import background from "../assets/img/noise.png";
import MovieDetailHeader from "../Layouts/MovieDetailHeader";
import { useEffect, useRef, useState } from "react";
import { getSimilarMovies } from "../Services/TMDB/movie.service";
import Videos from "../Layouts/Videos";
import Slider from "../Layouts/Slider";

const MovieDetail = () => {
  const { id } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies((data) => {
      setSimilarMovies(data);
    }, id);
  }, [id]);
  const moviedetailSearch = useRef(null);
  return (
    <>
      <Navbar ref={moviedetailSearch} addClass="hidden md:block" />
      <main
        className="font-lgSpartan bg-black pb-36 pt-10 md:pb-10 px-4 sm:px-8 md:px-12 xl:px-40"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Logo addClass="text-center text-3xl md:hidden" />
        <div className="mt-10">
          <MovieDetailHeader id={id} />
          <Slider
            title="Movie Like This"
            data={similarMovies}
            btnNext="nextSimilarMovies"
            btnPrev="prevSimilarMovies"
          />
          <Videos id={id} />
        </div>
      </main>
      <BottomNavbar />
    </>
  );
};

export default MovieDetail;
