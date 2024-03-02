import { useParams } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import MovieList from "../Layouts/MovieList";
import background from "../assets/img/noise.png";
import BottomNavbar from "../Layouts/BottomNavbar";
import { useRef } from "react";

const SearchPage = () => {
  const { context } = useParams();
  const searchDesktop = useRef(null);

  return (
    <>
      <Navbar ref={searchDesktop} />
      <main
        className="font-lgSpartan bg-black pb-36 pt-20 md:pb-10 px-4 sm:px-8 md:px-12 xl:px-40"
        style={{ backgroundImage: `url(${background})` }}
      >
        <MovieList context={context} isSearch={context} />
      </main>
      <BottomNavbar />
    </>
  );
};

export default SearchPage;
