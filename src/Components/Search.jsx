import { IoSearch } from "react-icons/io5";
import SearchItem from "./SearchItem";
import { Link } from "react-router-dom";
import { searchMovies } from "../Services/TMDB/movie.service";
import { useEffect, useState } from "react";
import useAnotherCompClicked from "../Hooks/useAnotherCompClicked";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setItemSearchOff,
  setItemSearchOn,
  setPage,
  setQuery,
} from "../redux/slicer/webContent";
import useWindowDimensions from "../Hooks/useWindowSize";

const Search = ({ addCLass }) => {
  const dispatch = useDispatch();
  const showItems = useSelector((state) => state.webContent.showItemSearch);
  const query = useSelector((state) => state.webContent.query);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 768) {
      dispatch(setItemSearchOff());
    }
  }, [width, dispatch]);

  useEffect(() => {
    if (query != "") {
      const delay = setTimeout(() => {
        searchMovies((data) => {
          setSearchedMovie(data.results);
        }, query);
      }, 500);
      return () => {
        clearTimeout(delay);
      };
    } else {
      const delay = setTimeout(() => {
        dispatch(setItemSearchOn());
        setSearchedMovie([]);
      }, 500);
      return () => {
        clearTimeout(delay);
      };
    }
  }, [query, dispatch, width]);

  //close search item when user click another component
  const itemRef = useRef(null);
  useAnotherCompClicked(itemRef, () => {
    dispatch(setItemSearchOff());
    console.log("this clicked");
  });

  return (
    <>
      <div className={`relative w-full space-y-4 ${addCLass}`}>
        <div className="w-full h-fit relative">
          <IoSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-white" />
          <input
            type="text"
            className="w-full rounded-2xl text-white bg-card border-2 border-tertiary text-sm font-light pl-10 py-1"
            placeholder="Cari Resep"
            onChange={(e) => {
              dispatch(setQuery(e.target.value));
              dispatch(setPage(1));
              if (width <= 768) {
                dispatch(setItemSearchOff());
              }
            }}
            onFocus={() => {
              if (width > 768) {
                dispatch(setItemSearchOn());
              }
            }}
          />
        </div>
        {/* Item Container */}
        {showItems && searchedMovie.length > 0 && (
          <div
            className="w-full bg-card border-2 border-tertiary rounded-xl divide-y divide-grayText"
            ref={itemRef}
          >
            {searchedMovie.slice(0, 3).map((value, i) => (
              <SearchItem key={i} data={value} />
            ))}

            {searchedMovie.length > 3 && (
              <div className="text-white p-2 text-center">
                <Link
                  to={`/search/${query}`}
                  className="w-full h-full"
                  onClick={() => {
                    dispatch(setItemSearchOff());
                    dispatch(setQuery(""));
                  }}
                >
                  <h1 className="text-sm font-light">See More...</h1>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
