/* eslint-disable react-hooks/exhaustive-deps */
import BottomNavbar from "../Layouts/BottomNavbar";
import background from "../assets/img/noise.png";
import Navbar from "../Layouts/Navbar";
import HeaderWatchList from "../Layouts/HeaderWatchList";
import ButtonLogout from "../Components/ButtonLogout";
import { useEffect, useState } from "react";
import { getAllWatchlist } from "../Services/Firebase/firebase.service";
import MovieList from "../Layouts/MovieList";

const WatchList = () => {
  const account = JSON.parse(localStorage.getItem("user"));
  const [movie, setMovie] = useState([]);
  const [movieList, setMovieList] = useState({});
  useEffect(() => {
    getAllWatchlist(account.uid, (data) => {
      setMovie((append) => [...append, data]);
      setMovieList({ results: movie });
    });
  }, []);
  useEffect(() => {
    setMovieList({ page: 1, results: movie });
  }, [movie]);

  return (
    <>
      <Navbar>
        <ButtonLogout addClass="hidden md:block" />
      </Navbar>
      <main
        className="font-lgSpartan bg-black pt-10 pb-10 px-4 sm:px-8 md:px-12 xl:px-40"
        style={{ backgroundImage: `url(${background})` }}
      >
        <HeaderWatchList />
        <MovieList context="My Watchlist" watchlist={movieList} />
      </main>
      <BottomNavbar />
    </>
  );
};

export default WatchList;
