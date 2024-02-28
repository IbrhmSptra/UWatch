import BottomNavbar from "../Layouts/BottomNavbar";
import background from "../assets/img/noise.png";
import Logo from "../Components/Logo";
import Carousel from "../Layouts/Carousel";
import Navbar from "../Layouts/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main
        className="font-lgSpartan bg-black pt-10 pb-10 px-4 sm:px-8 md:px-12 xl:px-40"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Logo addClass="text-center text-3xl md:hidden" />
        <div className="mt-10">
          <Carousel />
        </div>
      </main>
      <BottomNavbar />
    </>
  );
};

export default HomePage;
