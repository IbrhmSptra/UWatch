// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import AuthPage from "../Pages/AuthPage";

const Middleware = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  if (!user) {
    return <AuthPage />;
  }
  return children;
};

export default Middleware;
