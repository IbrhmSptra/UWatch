import { Link } from "react-router-dom";

const Logo = ({ addClass }) => {
  return (
    <Link to="/">
      <div className={`text-white font-bold ${addClass}`}>
        <span className="text-secondary">UW</span>atch
      </div>
    </Link>
  );
};

export default Logo;
