import { useEffect, useState } from "react";
import BadgeCategory from "../Components/BadgeCategory";
import Rating from "../Components/Rating";
import { getDetailMovie } from "../Services/TMDB/movie.service";
import ButtonAddWatchlist from "../Components/ButtonAddWatchlist";

const MovieDetailHeader = ({ id }) => {
  const BASE_IMG_URL = import.meta.env.VITE_BASE_IMG_URL;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getDetailMovie((data) => {
      setMovie(data);
    }, id);
  }, [id]);

  return movie ? (
    <div className="sm:flex">
      <div className="sm:w-1/2">
        <img
          src={`${BASE_IMG_URL}${movie.poster_path}`}
          alt="PosterImg"
          className=""
        />
      </div>

      <div className="w-full  bg-card py-4 px-2 flex flex-col justify-between lg:px-10 lg:py-6">
        <div className="flex flex-col gap-2 md:gap-6">
          <div className="space-y-1">
            <h1 className="text-white font-bold text-xl md:text-3xl lg:text-5xl">
              {movie.title}
            </h1>
            <p className="text-white text-xs font-light min-h-16 md:text-base">
              {movie.overview}
            </p>
          </div>
          <div className="flex gap-1 ">
            {movie.genres &&
              movie.genres.map((value, i) => (
                <BadgeCategory key={i} category={value.id} />
              ))}
          </div>
          {movie.vote_average && <Rating rating={movie.vote_average} />}
        </div>
        <div className="mb-8">
          <ButtonAddWatchlist data={movie} />
        </div>
      </div>
    </div>
  ) : null;
};

export default MovieDetailHeader;
