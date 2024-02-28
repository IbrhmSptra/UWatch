import { IoSearch } from "react-icons/io5";
import SearchItem from "./SearchItem";
import { Link } from "react-router-dom";
import { searchMovies } from "../Services/TMDB/movie.service";
import { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    if (query != "") {
      const delay = setTimeout(() => {
        searchMovies((data) => {
          setSearchedMovie(data);
          setShowItems(true);
        }, query);
      }, 500);
      return () => {
        clearTimeout(delay);
      };
    } else {
      setShowItems(false);
      setSearchedMovie([]);
    }
  }, [query]);

  return (
    <>
      <div className="relative w-full space-y-4">
        <div className="w-full h-fit relative">
          <IoSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-white" />
          <input
            type="text"
            className="w-full rounded-2xl text-white bg-card border-2 border-tertiary text-sm font-light pl-10 py-1"
            placeholder="Cari Resep"
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => setShowItems(false)}
            onFocus={() => setShowItems(true)}
          />
        </div>
        {showItems && searchedMovie.length > 0 && (
          <div className="w-full bg-card border-2 border-tertiary rounded-xl divide-y divide-grayText">
            {searchedMovie.slice(0, 3).map((value, i) => (
              <SearchItem key={i} data={value} />
            ))}

            {searchedMovie.length > 3 && (
              <div className="text-white p-2 text-center">
                <Link to="/search" className="w-full h-full">
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
