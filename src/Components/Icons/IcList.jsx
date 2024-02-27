import { FaRegBookmark } from "react-icons/fa6";

const IcList = ({ addClass }) => {
  return (
    <div>
      <FaRegBookmark className={`text-black ${addClass}`} />
    </div>
  );
};

export default IcList;
