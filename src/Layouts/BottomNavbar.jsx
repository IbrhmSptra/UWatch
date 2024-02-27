import { Link } from "react-router-dom";
import IcGenre from "../Components/Icons/IcGenre";
import IcHome from "../Components/Icons/IcHome";
import IcList from "../Components/Icons/IcList";
import IcSearch from "../Components/Icons/IcSearch";

const BottomNavbar = () => {
  return (
    <div className="bg-secondary fixed bottom-8 right-4 left-4 sm:right-8 sm:left-8 md:hidden p-4 flex justify-around rounded-xl divide-x-0">
      <Link to="/homepage" className="flex flex-col items-center">
        <IcHome addClass="text-3xl" />
        <p className="text-black font-light text-xs">Home</p>
      </Link>
      <div className="w-px bg-tertiary rounded-full"></div>
      <Link to="/search" className="flex flex-col items-center">
        <IcSearch addClass="text-3xl" />
        <p className="text-black font-light text-xs">Search</p>
      </Link>
      <div className="w-px bg-tertiary rounded-full"></div>
      <Link to="/genre" className="flex flex-col items-center">
        <IcGenre addClass="text-3xl" />
        <p className="text-black font-light text-xs">Genre</p>
      </Link>
      <div className="w-px bg-tertiary rounded-full"></div>
      <Link to="watchlist" className="flex flex-col items-center">
        <IcList addClass="text-3xl" />
        <p className="text-black font-light text-xs">My List</p>
      </Link>
    </div>
  );
};

export default BottomNavbar;
