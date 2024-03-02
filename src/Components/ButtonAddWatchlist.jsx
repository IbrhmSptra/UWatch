import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";
import {
  deleteWatchlist,
  getWatchlist,
  insertWatchlist,
} from "../Services/Firebase/firebase.service";

const ButtonAddWatchlist = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [isAdded, setIsAdded] = useState({});
  const account = JSON.parse(localStorage.getItem("user"));

  //get is data is already added?
  useEffect(() => {
    getWatchlist(data.id, account.uid, (data) => {
      setIsAdded(data);
    });
  }, [account, data, loading]);

  const handleAddWatchlist = async () => {
    setLoading(true);
    const payload = {
      uid: account.uid,
      adult: data.adult,
      backdrop_path: data.backdrop_path,
      genre_ids: data.genres.map((value) => value.id),
      id: data.id,
      original_language: data.original_language,
      original_title: data.original_title,
      overview: data.overview,
      popularity: data.popularity,
      poster_path: data.poster_path,
      release_date: data.release_date,
      title: data.title,
      video: data.video,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
    };
    try {
      if (Object.keys(isAdded).length > 0) {
        //delete from watchlist
        deleteWatchlist(payload.id, payload.uid, () => {
          setLoading(false);
          setIsAdded({});
        });
      } else {
        //add from watchlist
        insertWatchlist(payload.id, payload, () => {
          setLoading(false);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return (
      <div
        className="py-2 bg-secondary flex justify-center gap-x-4 rounded-full cursor-pointer"
        onClick={handleAddWatchlist}
      >
        {loading && <VscLoading className="animate-spin text-xl" />}
        <p className="font-semibold">Loading..</p>
      </div>
    );
  } else {
    return (
      <div
        className="py-2 bg-secondary flex justify-center gap-x-4 rounded-full cursor-pointer"
        onClick={handleAddWatchlist}
      >
        {Object.keys(isAdded).length > 0 ? (
          <FaCheck className="translate-y-0.5" />
        ) : (
          <FaPlus className="translate-y-0.5" />
        )}

        <p className="font-semibold">
          {Object.keys(isAdded).length > 0
            ? "In Watchlist"
            : "Add To Watchlist"}
        </p>
      </div>
    );
  }
};

export default ButtonAddWatchlist;
