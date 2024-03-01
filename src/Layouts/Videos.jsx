import { useEffect, useState } from "react";
import { getVideoMovie } from "../Services/TMDB/movie.service";

const Videos = ({ id }) => {
  const YOUTUBE_URL = import.meta.env.VITE_YOUTUBE_URL;
  const [video, setVideo] = useState([]);
  const [videoYT, setVideoYT] = useState([]);
  useEffect(() => {
    getVideoMovie((data) => {
      setVideo(data);
    }, id);
  }, [id]);

  useEffect(() => {
    const videoYT = video.filter((video) => video.site == "YouTube");
    setVideoYT(videoYT);
  }, [video]);

  return (
    <div className="text-white mt-10">
      <h1 className="font-semibold text-3xl xl:text-3xl text-white">Video</h1>
      <div className="space-y-6 gap-10 mt-4 sm:grid sm:grid-cols-2 sm:space-y-0">
        {videoYT &&
          videoYT.map((value, i) => (
            <iframe
              key={i}
              className="w-full h-full aspect-video"
              src={`${YOUTUBE_URL}${value.key}`}
            ></iframe>
          ))}
      </div>
    </div>
  );
};

export default Videos;
