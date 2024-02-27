import { CiPlay1 } from "react-icons/ci";
import { getVideoMovie } from "../Services/TMDB/movie.service";
import { useState } from "react";
const ButtonTrailer = ({ id }) => {
  const [trailer, setTrailer] = useState("");
  useState(() => {
    getVideoMovie((data) => {
      const link = data.find((i) => i.type == "Trailer");
      setTrailer(link);
    }, id);
  }, []);

  return (
    <div className="border-2 border-tertiary rounded-full py-1  w-32 bg-card hover:border-white transition-all">
      <a
        href={`https://www.youtube.com/watch?v=${trailer.key}`}
        target="_blank"
        className="w-full h-full flex justify-evenly"
      >
        <CiPlay1 className="text-white text-2xl" />
        <p className="text-white">Trailer</p>
      </a>
    </div>
  );
};

export default ButtonTrailer;
