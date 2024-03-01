import { Link } from "react-router-dom";
import Rating from "./Rating";
import { CiImageOff } from "react-icons/ci";

const Card = ({ data }) => {
  const IMG_URL_500W = import.meta.env.VITE_BASE_IMG_URL_500W;
  return (
    <Link to={`/moviedetail/${data.id}`}>
      {data.poster_path ? (
        <img
          className="select-none w-full h-full max-h-[13rem] sm:max-h-[24rem] md:max-h-[19rem] object-cover"
          src={`${IMG_URL_500W}${data.poster_path}`}
          alt="thumbnail"
        />
      ) : (
        //sm:max-h-[24rem]
        <div className=" w-full h-full max-h-[18rem] sm:max-h-[16.7rem] md:max-h-[19rem] bg-black flex justify-center items-center">
          <CiImageOff className="text-white text-5xl w-full h-full py-20" />
        </div>
      )}

      <div className="select-none min-h-32 py-3 px-4 bg-card text-white flex flex-col justify-between">
        <h1 className="line-clamp-2 text-lg font-semibold">{data.title}</h1>
        <Rating rating={data.vote_average} />
      </div>
    </Link>
  );
};

export default Card;
