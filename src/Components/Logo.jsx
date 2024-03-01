import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setItemSearchOff } from "../redux/slicer/webContent";

const Logo = ({ addClass }) => {
  const dispatch = useDispatch();
  return (
    <Link to="/">
      <div
        className={`text-white font-bold ${addClass}`}
        onClick={() => {
          dispatch(setItemSearchOff());
        }}
      >
        <span className="text-secondary">UW</span>atch
      </div>
    </Link>
  );
};

export default Logo;
