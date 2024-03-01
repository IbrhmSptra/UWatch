import BadgeCategory from "./BadgeCategory";
import ButtonTrailer from "./ButtonTrailer";
import Rating from "./Rating";

const ItemCarousel = ({ data }) => {
  const IMG_URL = import.meta.env.VITE_BASE_IMG_URL;
  return (
    <a href={`/moviedetail/${data.id}`} className="relative md:flex">
      <img
        className="w-full md:w-1/2"
        src={`${IMG_URL}${data.backdrop_path}`}
        alt="BackdropImg"
      />
      <div className="absolute bottom-8 left-4 max-w-64">
        <h1 className=" text-white font-bold text-2xl md:hidden">
          {data.title}
        </h1>
        <ButtonTrailer id={data.id} />
      </div>
      <div className="w-1/2 bg-card hidden md:flex py-4 px-8 flex-col justify-around">
        <div>
          <h1 className="text-white font-bold text-2xl lg:text-3xl">
            {data.title}
          </h1>
          <p className="text-white text-xs font-light min-h-16 lg:text-base line-clamp-4">
            {data.overview}
          </p>
        </div>
        <div className="flex gap-2 ">
          {data.genre_ids.map((value, i) => (
            <BadgeCategory key={i} category={value} />
          ))}
        </div>
        <Rating rating={data.vote_average} />
      </div>
    </a>
  );
};

export default ItemCarousel;
