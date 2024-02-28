import Logo from "../Components/Logo";
import Search from "../Components/Search";
import IcList from "../Components/Icons/IcList";
import { Link } from "react-router-dom";
import useNavState from "../Hooks/useNavState";

const Navbar = ({ children }) => {
  const show = useNavState();
  return (
    <nav
      className={`fixed z-20 top-0 w-full py-4 px-4 sm:px-8 md:px-12 xl:px-40 transition-all duration-500 hidden md:block ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-start xl:gap-x-52 md:gap-x-24 lg:gap-x-36">
        <Logo addClass="text-2xl" />
        <div className="w-full flex gap-x-8">
          <Search />
          <Link to="/watchlist">
            <div className="p-2 flex items-center justify-center bg-secondary rounded-full">
              <IcList />
            </div>
          </Link>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
