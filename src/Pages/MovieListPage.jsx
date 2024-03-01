import { useParams } from "react-router-dom";
import MovieList from "../Layouts/MovieList";
import Navbar from "../Layouts/Navbar";
import BottomNavbar from "../Layouts/BottomNavbar";
import background from "../assets/img/noise.png";

const MovieListPage = () => {
  const { context } = useParams();
  return (
    <>
      <Navbar />
      <main
        className="font-lgSpartan bg-black pb-36 pt-10 md:pb-10 px-4 sm:px-8 md:px-12 xl:px-40"
        style={{ backgroundImage: `url(${background})` }}
      >
        <MovieList context={context} />
      </main>
      <BottomNavbar />
    </>
  );
};

export default MovieListPage;
