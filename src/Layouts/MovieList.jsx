import { useEffect, useState } from "react";
import Card from "../Components/CardMovie";
import {
  getMovieByGenre,
  getTopRated,
  searchMovies,
} from "../Services/TMDB/movie.service";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import genreJson from "../Services/TMDB/GenreMovie.json";
import { useSelector } from "react-redux";
import useWindowDimensions from "../Hooks/useWindowSize";

const MovieList = ({ context, isSearch, watchlist, addClass }) => {
  const page = useSelector((state) => state.webContent.page);
  const [totalPage, setTotalPage] = useState(null);
  const [endPage, setEndPage] = useState(false);
  const [firstPage, setFirstPage] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
  const query = useSelector((state) => state.webContent.query);
  const { width } = useWindowDimensions();

  //get genre from context
  const genre = genreJson.find((i) => i.name == context);

  useEffect(() => {
    window.scrollTo(0, 0);
    //show top rated movie
    if (context == "Top Rated Movie") {
      getTopRated((data) => {
        setMovieList(data);
        setTotalPage(data.total_pages);
      }, page);
    }
    //show my watchlist
    else if (context == "My Watchlist") {
      setMovieList(watchlist);
      setTotalPage(watchlist.page);
    }
    // "see more" search on desktop screen -> /search/:context
    else if (context && context == isSearch && width > 768) {
      searchMovies(
        (data) => {
          setMovieList(data);
          setTotalPage(data.total_pages);
        },
        context,
        page
      );
    }
    // "see more" search on desktop screen -> /search/:context but user downscale width screen
    else if (context && context == isSearch && width <= 768) {
      navigate("/search");
    }
    //show search page -> /search (only for mobile)
    else if (context == null && width <= 768) {
      const delay = setTimeout(() => {
        searchMovies(
          (data) => {
            setMovieList(data);
            setTotalPage(data.total_pages);
          },
          query,
          page
        );
      }, 500);

      return () => {
        clearTimeout(delay);
      };
    }
    //show search page -> /search (only for mobile) but user upscaling width screen
    else if (context == null && width > 768) {
      navigate("/");
    }
    //show by genre
    else {
      getMovieByGenre(
        (data) => {
          setMovieList(data);
          setTotalPage(data.total_pages);
        },
        genre.id,
        page
      );
    }

    //Pagination Logic
    if (page == 1) {
      setFirstPage(true);
    } else {
      setFirstPage(false);
    }
    if (page == totalPage) {
      setEndPage(true);
    } else {
      setEndPage(false);
    }
  }, [
    page,
    context,
    navigate,
    totalPage,
    genre,
    query,
    isSearch,
    width,
    watchlist,
  ]);

  return (
    <div className={`md:mt-10 ${addClass}`}>
      <h1 className="font-semibold text-3xl xl:text-3xl text-white">
        {movieList ? context : "Search"}
        {context == null && width <= 768 && "Search"}
      </h1>
      <div
        className={`mt-4 relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 min-h-screen`}
      >
        {movieList.results &&
          movieList.results.map((value, i) => <Card key={i} data={value} />)}
      </div>
      <div className="flex justify-center items-center mt-10">
        {movieList.total_pages > 1 && (
          <Pagination isEndPage={endPage} isFirstPage={firstPage} />
        )}
      </div>
    </div>
  );
};

export default MovieList;
