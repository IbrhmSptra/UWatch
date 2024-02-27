import { useSelector } from "react-redux";
import Logo from "../Components/Logo";
import NavigateAuth from "../Components/NavigateAuth";

const BannerAuth = () => {
  const isLogin = useSelector((state) => state.authNavigate.pageLogin);
  return (
    <div
      className={`w-1/2 h-full absolute  bg-card flex flex-col justify-evenly items-center transition-all duration-300 ${
        isLogin ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <Logo addClass="text-5xl lg:text-6xl xl:text-7xl" />
      <NavigateAuth />
    </div>
  );
};

export default BannerAuth;
