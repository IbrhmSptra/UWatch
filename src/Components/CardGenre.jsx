import { Link } from "react-router-dom";

const CardGenre = ({ data }) => {
  const BASE_IMG_URL = import.meta.env.VITE_IMG_GENRE;
  return (
    <div>
      <Link to={`/movielist/${data.name}`}>
        <img
          className="h-48 w-full object-cover"
          src={`${BASE_IMG_URL}${data.poster_path}`}
          alt="img-genre"
        />
        <div className="flex justify-center items-center py-4 bg-card">
          <p className="text-white text-xl font-semibold">{data.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardGenre;
