import { FaPlus } from "react-icons/fa";
const ButtonAddWatchlist = () => {
  return (
    <div className="py-2 bg-secondary flex justify-center gap-x-4 rounded-full">
      <FaPlus className="translate-y-0.5" />
      <p className="font-semibold">Watchlist</p>
    </div>
  );
};

export default ButtonAddWatchlist;
