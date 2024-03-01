import { useParams } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import MovieList from "../Layouts/MovieList";
import background from "../assets/img/noise.png";
import BottomNavbar from "../Layouts/BottomNavbar";
import Search from "../Components/Search";

const SearchPage = () => {
  const { context } = useParams();

  return (
    <>
      <Navbar />
      <main
        className="font-lgSpartan bg-black pb-36 pt-8 md:pb-10 px-4 sm:px-8 md:px-12 xl:px-40"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Search addCLass={"block md:hidden mb-10"} />
        <MovieList context={context} isSearch={context} />
      </main>
      <BottomNavbar />
    </>
  );
};

export default SearchPage;
