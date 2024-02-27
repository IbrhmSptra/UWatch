import { IoSearch } from "react-icons/io5";

const IcSearch = ({ addClass }) => {
  return (
    <div>
      <IoSearch className={`text-black ${addClass}`} />
    </div>
  );
};

export default IcSearch;
