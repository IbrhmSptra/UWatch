import { Link } from "react-router-dom";
import { CiImageOff } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setItemSearchOff } from "../redux/slicer/webContent";

const SearchItem = ({ data }) => {
  const BASE_IMG_URL = import.meta.env.VITE_BASE_IMG_URL;
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="p-4 text-white"
        onClick={() => {
          dispatch(setItemSearchOff());
        }}
      >
        <Link to={`/moviedetail/${data.id}`} className="flex gap-x-6">
          {data.poster_path ? (
            <img
              className="max-h-36"
              src={`${BASE_IMG_URL}${data.poster_path}`}
              alt="Poster-Movies"
            />
          ) : (
            <div className="h-36 min-w-24 bg-black flex justify-center items-center">
              <CiImageOff className="text-white text-5xl" />
            </div>
          )}

          <div className="space-y-2">
            <h1 className="font-bold text-xl line-clamp-3">{data.title}</h1>
            <p className="font-light text-sm xl:line-clamp-4 md:line-clamp-3">
              {data.overview}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SearchItem;
