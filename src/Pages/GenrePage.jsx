import Genre from "../Layouts/Genre";
import BottomNavbar from "../Layouts/BottomNavbar";
import background from "../assets/img/noise.png";

const GenrePage = () => {
  return (
    <>
      <main
        className="font-lgSpartan bg-black pb-36 pt-10 md:pb-10 px-4 sm:px-8 md:px-12 xl:px-40"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Genre />
      </main>
      <BottomNavbar />
    </>
  );
};

export default GenrePage;
