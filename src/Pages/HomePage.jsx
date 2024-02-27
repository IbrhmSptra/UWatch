import BottomNavbar from "../Layouts/BottomNavbar";
import background from "../assets/img/noise.png";
import Logo from "../Components/Logo";
import Carousel from "../Layouts/Carousel";
const HomePage = () => {
  return (
    <>
      <main
        className="font-lgSpartan bg-black py-4 px-4 sm:px-8 md:px-12 xl:px-40 h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Logo addClass="text-center text-3xl" />
        <div className="mt-10">
          <Carousel />
        </div>
      </main>
      <BottomNavbar />
    </>
  );
};

export default HomePage;
