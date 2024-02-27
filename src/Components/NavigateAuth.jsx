import { useDispatch, useSelector } from "react-redux";
import { cleanError, togglePage } from "../redux/slicer/authNavigateSlice";
const NavigateAuth = ({ addClass }) => {
  const isLogin = useSelector((state) => state.authNavigate.pageLogin);
  const dispatch = useDispatch();
  return (
    <div className={`space-y-2 ${addClass}`}>
      <p className="text-xs text-white text-center md:text-base xl:text-lg">
        {isLogin ? "Doesn't have an account?" : "Have an account?"}
      </p>
      <p
        className="text-xs text-secondary text-center cursor-pointer select-none md:text-base xl:text-lg"
        onClick={() => {
          dispatch(togglePage());
          dispatch(cleanError());
        }}
      >
        {isLogin ? "Register Here" : "Login Here"}
      </p>
    </div>
  );
};

export default NavigateAuth;
