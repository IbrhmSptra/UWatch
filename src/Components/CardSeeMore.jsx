import { useNavigate } from "react-router-dom";

const CardSeeMore = () => {
  const navigate = useNavigate();
  return (
    <div className="relative ">
      <img
        className="w-full h-full max-h-[18rem] sm:max-h-[24rem] md:max-h-[19rem]"
        src="https://image.tmdb.org/t/p/original/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg"
        alt="placeholder"
      />

      <div className="min-h-32 py-3 px-4 bg-card"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-card z-10 flex items-center justify-center">
        <h1
          className="text-2xl text-white hover:underline cursor-pointer select-none font-light"
          onClick={() => {
            navigate("/movielist/Top Rated Movie");
          }}
        >
          See More
        </h1>
      </div>
    </div>
  );
};

export default CardSeeMore;
