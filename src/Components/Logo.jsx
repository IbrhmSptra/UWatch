import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setItemSearchOff } from "../redux/slicer/webContent";

const Logo = ({ addClass }) => {
  const dispatch = useDispatch();
  return (
    <Link
      to="/"
      onClick={() => {
        dispatch(setItemSearchOff());
      }}
    >
      <div className={`text-white font-bold ${addClass}`}>
        <span className="text-secondary">UW</span>atch
      </div>
    </Link>
  );
};

export default Logo;
