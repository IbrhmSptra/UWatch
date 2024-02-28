import BottomNavbar from "../Layouts/BottomNavbar";
import background from "../assets/img/noise.png";
import Navbar from "../Layouts/Navbar";
import HeaderWatchList from "../Layouts/HeaderWatchList";
import ButtonLogout from "../Components/ButtonLogout";

const WatchList = () => {
  return (
    <>
      <Navbar>
        <ButtonLogout addClass="hidden md:block" />
      </Navbar>
      <main
        className="font-lgSpartan bg-black pt-10 pb-10 px-4 sm:px-8 md:px-12 xl:px-40 h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <HeaderWatchList />
      </main>
      <BottomNavbar />
    </>
  );
};

export default WatchList;
